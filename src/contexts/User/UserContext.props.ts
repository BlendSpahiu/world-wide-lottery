import { Nullable, UserModel } from "@interfaces";

export interface UserContextProps {
  users: Nullable<UserModel[]>;
  user: Nullable<UserModel>;
  deleteUsers: () => void;
  addUser: (user: UserModel) => void;
  updateUser: (email: string) => void;
}
