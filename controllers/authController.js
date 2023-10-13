const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError("got no data ", 400);
  }

  const id = new Date();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "user Created", token });
};

const dashboard = async (req, res) => {
  const authToken = req.headers.authorization;
  if (!authToken || !authToken.startsWith("Bearer ")) {
    throw new CustomAPIError("got no token ", 401);
  }

  const token = authToken.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        message: `Hello ${decoded.username}`,
        secret: `heres your luckyNumber ${luckyNumber}`,
      });
  } catch (err) {
    throw new CustomAPIError("not authorized token ", 401);
  }
};

module.exports = { login, dashboard };
