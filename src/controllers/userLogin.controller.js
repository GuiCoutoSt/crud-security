import { userLoginService } from "../services/userLogin.service";

export const userLoginController = (req, res) => {
  const { email, password } = req.body;

  const userLogin = userLoginService(email, password);

  if (userLogin.status === 400) {
    return res.status(userLogin.status).json({ error: userLogin.response });
  }

  return res.status(userLogin.status).json({ token: userLogin.response });
};
