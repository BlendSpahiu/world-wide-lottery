import { ReactElement, useState } from "react";
import { Button } from "@mui/material";
import { useGenerateUser, useUsers } from "@hooks";
import { User } from "../User/User";
import { Loader, Ternary } from "@atoms";
import { Modal } from "@molecules";
import { useEffect } from "react";

export const Home = (): ReactElement => {
  // hooks
  const { users } = useUsers();
  const { handleGenerateUser, isLoading, open, setOpen } = useGenerateUser();

  // handlers
  const handleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (users && users[users.length - 1]?.isWinner === true) {
      setOpen(true);
    }
  }, [users]);

  return (
    <>
      <div>
        <Button onClick={handleGenerateUser} variant="contained">
          Generate User
        </Button>
        <Ternary
          condition={isLoading}
          fallback={
            users?.length !== 0 &&
            !isLoading && <User user={users && users[users.length - 1]} />
          }
        >
          <Loader />
        </Ternary>
      </div>

      <Modal
        open={open}
        onCancel={handleModal}
        title="You just have won the lottery! WOOHOO!!!!"
      />
    </>
  );
};
