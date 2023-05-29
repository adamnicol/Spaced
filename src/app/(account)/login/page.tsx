import { LoginCredentials } from "@/schemas/login.schema";
import { LoginForm } from "@/components/form";

export default function LoginPage() {
  async function onSubmit(credentials: LoginCredentials) {
    "use server";
  }

  return <LoginForm onSubmit={onSubmit} />;
}
