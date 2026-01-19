export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside style={{ width: 200, background: "#eee", padding: 20 }}>
        <h3>Dashboard</h3>
        <p>Profile</p>
        <p>Settings</p>
      </aside>
      <main style={{ padding: 20 }}>{children}</main>
    </div>
  );
}
