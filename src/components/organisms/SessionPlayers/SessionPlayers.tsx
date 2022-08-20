import { ReactElement, useState, useRef } from "react";
import { User } from "@organisms";
import { Button } from "@mui/material";
import { UserModel } from "@interfaces";
import { SessionPlayersProps } from "./SessionPlayers.props";
import clsx from "clsx";

export const SessionPlayers = ({
  users,
}: SessionPlayersProps): ReactElement => {
  // local state
  const [isReverse, setIsReverse] = useState<boolean>(false);
  const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(
    users?.filter((user) => user.time).reverse() || []
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
      <Button onClick={excelExport}>Download as Excel sheet</Button>
      <div className="grid grid-cols-3 gap-5">
        {filteredUsers?.map((user) => (
          <User
            key={user.id}
            className={clsx(user.isWinner && "!bg-gray-200")}
            user={user}
          />
        ))}
      </div>
    </>
  );
};
