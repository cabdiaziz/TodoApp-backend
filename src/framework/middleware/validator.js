import { validationResult } from "express-validator";

//what this function is doing ://? [ do some revision ].
export const validatorMiddleware = (req, res, next) => {
  // Finds the validation errors in
  // this request and wraps them in an object with handler functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
