import { response } from "express";
import { updadeUserService } from "../services/updateUser.service";

export const updateUserController = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updateUser = updadeUserService(id, name, email);

  return response.json(updateUser).status(204);
};
