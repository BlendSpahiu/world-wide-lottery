import { ReactElement } from "react";
import { HomePage, SessionPlayersPage, StatsPage, WinnersPage } from "@pages";
import "./styles/main.scss";
import { Navigate, Route, Routes } from "react-router-dom";

export const App = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/session-players" element={<SessionPlayersPage />} />
      <Route path="/winners" element={<WinnersPage />} />
      <Route path="/stats" element={<StatsPage />} />
    </Routes>
  );
};
