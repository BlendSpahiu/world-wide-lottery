import { ReactElement } from "react";
import { TernaryConditionProps } from "./Conditions.props";

export const Ternary = ({
  condition,
  children,
  fallback,
}: TernaryConditionProps): ReactElement => {
  return condition ? <>{children}</> : <>{fallback}</>;
};
