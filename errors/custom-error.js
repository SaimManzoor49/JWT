 class CustomAPIError extends Error{
    constructor(message,statusCode){
        console.log("constuctor here" + message+statusCode)
        super(message)
        this.statusCode = statusCode
    }
}

module.exports = CustomAPIError

