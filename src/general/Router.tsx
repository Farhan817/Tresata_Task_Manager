import React from "react";
import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths";
import Layout from "./Layout";

export const Router: React.FC = () => (
  <Routes>
    {RoutePaths.map((item) => (
      <Route
        key={item.path} // ✅ add key to avoid warning
        path={item.path}
        element={
          <Layout title={item.title} isBack={item.isBack}>
            {item.comp}
          </Layout>
        }
      />
    ))}
  </Routes>
);
