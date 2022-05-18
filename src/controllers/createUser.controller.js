import { createUserService } from "../services/createUser.service";

export const createUserController = async (req, res) => {
  const { email, name, password } = req.body;

  const user = await createUserService(email, name, password);

  return res.json(user).status(201);
};
