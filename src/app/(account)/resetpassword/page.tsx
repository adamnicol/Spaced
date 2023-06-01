import { ResetPasswordForm } from "@/components/form";
import { ResetPasswordRequest } from "@/schemas/login.schema";

export default function ResetPasswordPage() {
  async function onSubmit(request: ResetPasswordRequest) {
    "use server";
  }

  return <ResetPasswordForm onSubmit={onSubmit} />;
}
