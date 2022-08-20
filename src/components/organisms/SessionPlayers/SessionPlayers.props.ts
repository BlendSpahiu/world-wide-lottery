import { UserModel } from "@interfaces";

export interface SessionPlayersProps {
  user: UserModel | null;
  users: UserModel[];
}
