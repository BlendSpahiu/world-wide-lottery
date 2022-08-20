import { Nullable, UserModel } from "@interfaces";
import { createContext, ReactElement, ReactNode, useState } from "react";
import { UserContextProps } from "./UserContext.props";

export const UserContext = createContext<UserContextProps>({
  users: null,
  deleteUsers: () => null,
  addUser: (_user: UserModel) => null,
  updateUser: (_user: UserModel) => null,
});

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  // local state
  const [users, setUsers] = useState<Nullable<UserModel[]>>([]);

  const addUser = (user: UserModel) => {
    if (user) setUsers([...(users || []), user]);
  };

  const updateUser = (user: UserModel) => {
    setUsers([...(users || []), { ...user }]);
  };

  const deleteUsers = () => setUsers([]);

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUsers }}>
      {children}
    </UserContext.Provider>
  );
};
