import { ReactElement } from "react";
import { IfConditionProps } from "./Conditions.props";

export const If = ({ condition, children }: IfConditionProps): ReactElement => {
  return condition ? <>{children}</> : <></>;
};
