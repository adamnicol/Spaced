"use client";

import { Anchor, Button, Checkbox, Group, Paper, PasswordInput, TextInput } from "@mantine/core";
import { LoginCredentials, LoginSchema } from "@/schemas/login.schema";
import { useForm, zodResolver } from "@mantine/form";

type LoginFormProps = {
  onSubmit: (credentials: LoginCredentials) => void;
};

export function LoginForm(props: LoginFormProps) {
  const form = useForm<LoginCredentials>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(LoginSchema),
  });

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(props.onSubmit)}>
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
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>

        <Button type="submit" fullWidth mt="xl">
          Login
        </Button>
      </form>
    </Paper>
  );
}
