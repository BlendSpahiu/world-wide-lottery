import { useContext } from "react";
import { UserContext } from "@contexts";

export const useUsers = () => {
  return useContext(UserContext);
};
