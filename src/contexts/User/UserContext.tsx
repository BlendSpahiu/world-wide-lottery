import { Nullable, UserModel } from "@interfaces";
import { GenderEnums } from "@enums";
import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { UserContextProps } from "./UserContext.props";

export const UserContext = createContext<UserContextProps>({
  users: null,
  user: null,
  deleteUsers: () => null,
  addUser: (_user: UserModel) => null,
  updateUser: (_email: string) => null,
});

export const UserProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  // local state
  const [users, setUsers] = useState<Nullable<UserModel[]>>([]);
  const [user, setUser] = useState<Nullable<UserModel>>(
    users && users[users?.length - 1]
  );

  const addUser = (user: UserModel) => {
    if (user) setUsers([...(users || []), user]);
  };

  const updateUser = (email: string) => {
    setUser({
      id: user?.id || "",
      picture: user?.picture || "",
      fullName: user?.fullName || "",
      gender: user?.gender || GenderEnums.MALE,
      age: user?.age || 0,
      cell: user?.cell || "",
      phone: user?.phone || "",
      isWinner: user?.isWinner || false,
      location: user?.location || "",
      nat: user?.nat || "",
      time: user?.time || "",
      timesPlayed: user?.timesPlayed || 0,
      email,
    });
  };

  const deleteUsers = () => setUsers([]);

  useEffect(() => {
    if (users) setUser(users[users.length - 1]);
  }, [users, setUsers]);

  return (
    <UserContext.Provider
      value={{ users, user, addUser, updateUser, deleteUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};
