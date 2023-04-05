//? old way / version of api error handling.
// const apiErrorHandler = (code, msg) => {
//   return { code: code, message: msg };
// };
// export default apiErrorHandler;

//? this class is responsible about operation errors (that I can predict).

export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    //if s === 4 fail : else if s > 400 ServerError.
    this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
    this.isOperational = true;
  }
}
