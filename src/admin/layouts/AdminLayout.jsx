import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <header
        style={{
          background: "#1B3C53",
          color: "#fff",
          padding: "1rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ margin: 0 }}>Admin Panel</h3>
        <a href="/" style={{ color: "#E3E3E3", textDecoration: "none" }}>
          ← Back to Site
        </a>
      </header>
      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
}
