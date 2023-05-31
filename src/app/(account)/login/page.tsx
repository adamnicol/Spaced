import { LoginDetails } from "@/schemas/login.schema";
import { LoginForm } from "@/components/form";

export default function LoginPage() {
  async function onSubmit(details: LoginDetails) {
    "use server";
  }

  return <LoginForm onSubmit={onSubmit} />;
}
