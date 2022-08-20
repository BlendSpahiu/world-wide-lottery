import { ReactNode } from "react";

export interface IfConditionProps {
  condition: boolean;
  children: ReactNode;
}

export interface TernaryConditionProps extends IfConditionProps {
  fallback?: ReactNode;
}
