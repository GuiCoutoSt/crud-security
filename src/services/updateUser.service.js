import { users } from "../database";

export const updadeUserService = (id, name, email) => {
  const updatedUser = {
    id,
    name,
    email,
  };

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return "User not found!";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};
