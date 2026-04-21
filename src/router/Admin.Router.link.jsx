import { lazy } from "react";

const AdminDashboard = lazy(() => import("../admin/pages/Dashboard"));

export const adminRoutes = [
  {
    id: "1",
    name: "Admin Dashboard",
    path: "dashboard", // relative path for nested routing
    element: <AdminDashboard />,
  },
];
