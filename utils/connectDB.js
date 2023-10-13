const mongoose = require('mongoose')

module.exports = connectDB = async()=>{
    try {
        
        mongoose.connect(process.env.MONGO_URI).then(()=>{
            console.log("connected to DB")
        })

    } catch (error) {
        console.log("error while connecting \n" + error)
    }
}