import { deleteUserService } from "../services/deleteUser.service";

export const deleteUserController = (req, res) => {
  const { id } = req.params;

  const deleteUser = deleteUserService(id);

  return res.json(deleteUser).status(200);
};
