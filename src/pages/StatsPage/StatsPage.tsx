import { ReactElement } from "react";
import { AppLayout } from "@templates";
import { Stats } from "@organisms";
import { useUsers } from "@hooks";

export const StatsPage = (): ReactElement => {
  // hooks
  const { users } = useUsers();

  return <AppLayout content={<Stats users={users || []} />} />;
};
