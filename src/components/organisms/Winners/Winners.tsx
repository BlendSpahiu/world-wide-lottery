import { ReactElement, useState } from "react";
import { UserModel } from "@interfaces";
import { Button } from "@mui/material";
import clsx from "clsx";
import { User } from "../User/User";
import { WinnersProps } from "./Winners.props";

export const Winners = ({ users }: WinnersProps): ReactElement => {
  // local state
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(
    users.filter((user) => user.time && user.isWinner).reverse() || []
  );

  // handlers
  const handleChangeOrder = () => {
    setIsReverse(!isReverse);
    setFilteredUsers(
      isReverse
        ? users?.filter((user) => user.time) || []
        : filteredUsers.reverse()
    );
  };

  return (
    <>
      <Button onClick={handleChangeOrder} variant="contained">
        Change order
      </Button>
      <div className="grid grid-cols-3 gap-5">
        {filteredUsers?.map((user) => (
          <User
            className={clsx(user.isWinner && "!bg-gray-200")}
            key={user.id}
            user={user}
          />
        ))}
      </div>
    </>
  );
};
