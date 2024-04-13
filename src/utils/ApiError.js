// create a custom error object for API operations. This will be used to send error responses from the API.

// New class Apierror which inherits from builtin Error class
class ApiError extends Error {
  constructor(
      statusCode,
      message= "Something went wrong",
      errors = [],
      stack = ""
  ){
      // super -> This calls the constructor of the parent Error class with the message parameter.
      super(message)
      this.statusCode = statusCode
      this.data = null
      this.message = message
      this.success = false;
      // cause it is handling errors
      this.errors = errors

      if (stack) {
          this.stack = stack
      } else{
          Error.captureStackTrace(this, this.constructor)
      }

  }
}

export {ApiError}