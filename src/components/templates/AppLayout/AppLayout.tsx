import { Header } from "@molecules";
import { ReactElement } from "react";
import { AppLayoutProps } from "./AppLayout.props";

export const AppLayout = ({ content }: AppLayoutProps): ReactElement => (
  <>
    <Header />
    <main className="mx-32 mt-16">{content}</main>
  </>
);
