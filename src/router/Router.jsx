import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { publicRoutes } from "./Router.link";
import NotFound from "../pages/NotFound";

import { adminRoutes } from "./Admin.Router.link";
import AdminLayout from "../admin/layouts/AdminLayout";

const RouterApp = () => {
  return (
    <Routes>
      {/* ======= PUBLIC WEBSITE ======= */}
      <Route element={<Layout />}>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.link}
            element={route.element}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* ======= ADMIN PANEL ======= */}
      <Route path="/admin" element={<AdminLayout />}>
        {/* default admin page */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {adminRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default RouterApp;
