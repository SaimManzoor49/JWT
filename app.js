require('dotenv').config()
require('express-async-errors')

const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/notFound')

const express = require('express')
const connectDB = require('./utils/connectDB')
const app = express()
const PORT = process.env.PORT || 8080

// Middlewares
app.use(express.static('./public'))
app.use(express.json())


//Routes
app.use('/api/v1',require('./routes/authRoutes'))



app.use(errorHandler);
app.use(notFound);










(async()=>{
    try{

        // await connectDB()
        app.listen(PORT,()=>{
            console.log("server is listning on PORT: "+PORT)
        })
    }catch(err){
        console.log(err)
    }

})();

