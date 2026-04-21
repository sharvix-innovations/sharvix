import { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { publicRoutes } from "./Router.link";
import { adminRoutes } from "./Admin.Router.link";

// AdminLayout lazy-loaded since it's a separate section
import { lazy } from "react";
const AdminLayout = lazy(() => import("../admin/layouts/AdminLayout"));
const NotFound = lazy(() => import("../pages/NotFound"));

const RouterApp = () => {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
};

export default RouterApp;
