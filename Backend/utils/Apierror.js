class APIerror extends Error{
    constructor(
        statuscode,
        message="something went wrong",
        
    ){
         super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = false
    }
}

export { APIerror }