import { Router } from "express";

import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUserController } from "../controllers/listUsers.controllers";
import { updateUserController } from "../controllers/updateUser.controller";

export const router = Router();

router.post("", createUserController);
router.get("", listUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
