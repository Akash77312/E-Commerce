// export const catchAsyncError = (req, res, next) => {
//   Promise.resolve(catchAsyncError(req, res, next)).catch(next);
// };
export const catchAsyncError = (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };