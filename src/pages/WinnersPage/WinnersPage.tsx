import { ReactElement } from "react";
import { useUsers } from "@hooks";
import { AppLayout } from "@templates";
import { Winners } from "@organisms";

export const WinnersPage = (): ReactElement => {
  // hooks
  const { user, users } = useUsers();

  return <AppLayout content={<Winners user={user} users={users || []} />} />;
};
