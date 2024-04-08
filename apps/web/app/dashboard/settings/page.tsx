import { Settings } from "./Settings";
import { getCurrentUser } from "@cap/database/auth/session";

export const revalidate = 0;

export default async function SettingsPage() {
  const user = await getCurrentUser();

  return <Settings user={user} />;
}