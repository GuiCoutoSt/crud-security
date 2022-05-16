import { listUsersServices } from "../services/listUsers.service";

export const listUserController = (req, res) => {
  const users = listUsersServices();

  return res.json(users).status(200);
};
