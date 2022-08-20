import { Nullable, UserModel } from "@interfaces";

export interface UserContextProps {
  users: Nullable<UserModel[]>;
  deleteUsers: () => void;
  addUser: (user: UserModel) => void;
  updateUser: (user: UserModel) => void;
}
