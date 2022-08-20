import { ReactElement } from "react";
import { SessionPlayers } from "@organisms";
import { AppLayout } from "@templates";
import { useUsers } from "@hooks";

export const SessionPlayersPage = (): ReactElement => {
  // hooks
  const { users, user } = useUsers();

  return (
    <AppLayout content={<SessionPlayers user={user} users={users || []} />} />
  );
};
