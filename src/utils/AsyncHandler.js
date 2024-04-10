
// query : explain the below code and use of it
// answer : The asyncHandler is a utility function( A higher order function) that takes a function as an argument and returns a new function. The  new function is an asynchronous function that calls the original function (paassed to it) and catches any errors that it throws. If an error is thrown, the new function sends a JSON response with the error message and a status code of 500. This allows you to write route handlers that use async/await syntax without having to worry about catching errors manually.

// ek wrapper function liya hai, jisme ek function liya hai, aur usko further ek function me pass kar diya(jo try/catch se vo function run kara raha hai):toh asynchandler is used for error handling in async functions
const asyncHandler = (func) => async (req,res,next) => {
  try {
    await func(req,res,next)  
  } catch (error) {
    res.status(error.code || 500).json({
      message:error.message || "Something went wrong",
      success:false
    })
  }
}
// ek function liya , aur usko further ek function me pass kar diya:


// same utility fumction but using promise:

/*
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    // resolve the promise returned by the request handler and catch any errors
    // catch -> Attaches a callback for only the rejection of the Promise.
    Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error));
  }
} 
*/



export {asyncHandler} 