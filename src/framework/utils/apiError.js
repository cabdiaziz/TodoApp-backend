//* this class is responsible about
//* operation errors (that I can predict).

export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
    this.message = message;
    this.isOperational = true;
  }
}
