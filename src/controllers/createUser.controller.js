import { createUserService } from "../services/createUser.service";

export const createUserController = (req, res) => {
  const { email, name } = req.body;

  const user = createUserService(email, name);

  return res.json(user).status(201);
};
