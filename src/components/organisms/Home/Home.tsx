import { ReactElement } from "react";
import { Button } from "@mui/material";
import { useGenerateUser, useUsers } from "@hooks";
import { Loader, Ternary, If } from "@atoms";
import { Modal } from "@molecules";
import { User } from "@organisms";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = (): ReactElement => {
  // hooks
  const { user, users, deleteUsers } = useUsers();
  const { pathname } = useLocation();
  const { handleGenerateUser, isLoading, open, setOpen } = useGenerateUser();

  // handlers
  const handleModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (user?.isWinner === true) {
      setOpen(true);
    }
  }, [setOpen, user?.isWinner]);

  return (
    <>
      <div>
        <div className="space-x-5">
          <Button onClick={handleGenerateUser} variant="contained">
            Generate User
          </Button>
          <If condition={!pathname.includes("session-players")}>
            <Button onClick={deleteUsers} variant="contained">
              Clear Session
            </Button>
          </If>
        </div>
        <Ternary
          condition={isLoading}
          fallback={users?.length !== 0 && !isLoading && <User user={user} />}
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
