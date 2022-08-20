import { ReactElement } from "react";
import { SessionPlayers } from "@organisms";
import { AppLayout } from "@templates";
import { useUsers } from "@hooks";

export const SessionPlayersPage = (): ReactElement => {
  // hooks
  const { users } = useUsers();

  return <AppLayout content={<SessionPlayers users={users || []} />} />;
};
