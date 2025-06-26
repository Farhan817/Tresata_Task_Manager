import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "./RoutePaths.jsx";
import { Layout } from "./Layout.jsx";

console.log(RoutePaths, "RoutePaths");
export const Router = () => (
  <Routes>
    {RoutePaths.map((item) => (
      <Route
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
