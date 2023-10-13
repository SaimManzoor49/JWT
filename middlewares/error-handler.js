const CustomAPIError = require('../errors/custom-error')


const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        console.log("instance\n\n")
        return res.status(err.statusCode).json({message:err.message})

    }
    console.log(err)
    return res.status(500).json({message:'Something went wrong :_('})

} 

module.exports = errorHandler