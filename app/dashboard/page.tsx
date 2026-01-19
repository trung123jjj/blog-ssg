import SettingsToggle from "./settings-toggle";

async function getUserProfile() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    name: "John Doe",
    email: "john@example.com",
  };
}

export default async function DashboardPage() {
  const user = await getUserProfile();

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <SettingsToggle />
    </div>
  );
}
