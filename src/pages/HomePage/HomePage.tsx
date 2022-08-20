import { ReactElement } from "react";
import { AppLayout } from "@templates";
import { Home } from "@organisms";

export const HomePage = (): ReactElement => {
  return <AppLayout content={<Home />} />;
};
