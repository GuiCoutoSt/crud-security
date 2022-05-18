import { Router } from "express";

import { createUserController } from "../controllers/createUser.controller";
import { deleteUserController } from "../controllers/deleteUser.controller";
import { listUserController } from "../controllers/listUsers.controllers";
import { updateUserController } from "../controllers/updateUser.controller";
import { userLoginController } from "../controllers/userLogin.controller";
import { verifyAuthTokenMiddleware } from "../middlewares/verifyAuthToken.middleware";
import { verifyEmailAvailabilityMiddleware } from "../middlewares/verifyEmailAvailability.middleware";

export const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.post("/login", userLoginController);
router.get("", listUserController);
router.put("/:id", verifyAuthTokenMiddleware, updateUserController);
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);
