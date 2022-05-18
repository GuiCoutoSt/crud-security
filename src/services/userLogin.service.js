import { users } from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

export const userLoginService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return { response: "Invalid email or password", status: 400 };
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return { response: "Invalid email or password", status: 400 };
  }

  const token = jwt.sign({ email: email }, "SECRETE_KEY", { espiresIn: "24h" });

  return { response: token, status: 200 };
};
