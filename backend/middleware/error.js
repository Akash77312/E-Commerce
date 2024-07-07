import ErrorHandler from "../utils/errorHandler.js";
// class ErrorHandler extends Error {
//   constructor(message, statusCode) {
//     super(message), (this.statusCode = statusCode);
//   }
// }
// export default ErrorHandler;

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal server error";
  err.statusCode = err.statusCode || 500;

  // // wrong mongodb id error
  // if (err.name === "CastError") {
  //   const message = `Resource not found. Invalid: ${err.path}`;
  //   console.log(message)
  //   err = new ErrorHandler(message, 404);
  // }
  
  
  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

