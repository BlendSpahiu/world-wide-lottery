import { UserModel } from "@interfaces";

export interface UserProps {
  className?: string;
  user: UserModel | null;
}
