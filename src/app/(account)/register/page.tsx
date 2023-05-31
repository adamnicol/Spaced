import { RegistrationDetails } from "@/schemas/registration.schema";
import { RegistrationForm } from "@/components/form";

export default function RegistrationPage() {
  async function onSubmit(details: RegistrationDetails) {
    "use server";
  }

  return <RegistrationForm onSubmit={onSubmit} />;
}
