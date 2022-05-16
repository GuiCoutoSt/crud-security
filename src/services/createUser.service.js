import { users } from "../database";
import { v4 as uuidv4 } from "uuid";

export const createUserService = (email, name) => {
  const userAlreadyExists = users.find((user) => user.email === email);

  if (userAlreadyExists) {
    return "This Email is already being used!";
  }

  const newUser = {
    email,
    name,
    id: uuidv4(),
  };

  users.push(newUser);

  return newUser;
};
