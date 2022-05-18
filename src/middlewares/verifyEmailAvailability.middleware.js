import { users } from "../database";

export const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;

  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return res.status(400).json({ error: "This email is already being used!" });
  }

  next();
};
