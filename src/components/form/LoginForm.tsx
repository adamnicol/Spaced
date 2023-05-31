"use client";

import Link from "next/link";
import { Anchor, Button, Checkbox, Group, Paper } from "@mantine/core";
import { LoginDetails, LoginSchema } from "@/schemas/login.schema";
import { PasswordInput, Text, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

type LoginFormProps = {
  onSubmit: (details: LoginDetails) => void;
};

export function LoginForm(props: LoginFormProps) {
  const form = useForm<LoginDetails>({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validate: zodResolver(LoginSchema),
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
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          {...form.getInputProps("password")}
        />

        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" {...form.getInputProps("remember")} />
          <Anchor component={Link} size="sm" href="/resetpassword">
            Forgot password?
          </Anchor>
        </Group>

        <Button type="submit" fullWidth mt="xl">
          Login
        </Button>

        <Text ta="center" mt="md" size="sm">
          Don&apos;t have an account?
          <Anchor component={Link} href="/register" fw="bold" ml={5}>
            Sign up
          </Anchor>
        </Text>
      </form>
    </Paper>
  );
}
