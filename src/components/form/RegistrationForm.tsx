"use client";

import Link from "next/link";
import { Anchor, Button, Paper, PasswordInput, Text, TextInput } from "@mantine/core";
import { RegistrationDetails, RegistrationSchema } from "@/schemas/registration.schema";
import { useForm, zodResolver } from "@mantine/form";

type RegistrationFormProps = {
  onSubmit: (details: RegistrationDetails) => void;
};

export function RegistrationForm(props: RegistrationFormProps) {
  const form = useForm<RegistrationDetails>({
    initialValues: {
      email: "",
      username: "",
      password: "",
      retypePassword: "",
    },
    validate: zodResolver(RegistrationSchema),
  });

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit((values) => props.onSubmit(values))}>
        <TextInput
          withAsterisk
          label="Email address"
          placeholder="Your email address"
          size="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Username"
          placeholder="Your username"
          mt="md"
          size="md"
          {...form.getInputProps("username")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          withAsterisk
          label="Retype password"
          placeholder="Retype password"
          mt="md"
          size="md"
          {...form.getInputProps("retypePassword")}
        />

        <Button type="submit" fullWidth mt="xl">
          Sign up
        </Button>

        <Text ta="center" mt="md" size="sm">
          Already have an account?
          <Anchor component={Link} href="/login" fw="bold" ml={5}>
            Login
          </Anchor>
        </Text>
      </form>
    </Paper>
  );
}
