"use client";

import Link from "next/link";
import { Anchor, Button, Group, Paper, TextInput } from "@mantine/core";
import { BsArrowLeftShort } from "react-icons/bs";
import { ResetPasswordRequest, ResetPasswordSchema } from "@/schemas/login.schema";
import { useForm, zodResolver } from "@mantine/form";

type ResetPasswordFormProps = {
  onSubmit: (request: ResetPasswordRequest) => void;
};

export function ResetPasswordForm(props: ResetPasswordFormProps) {
  const form = useForm<ResetPasswordRequest>({
    initialValues: {
      email: "",
    },
    validate: zodResolver(ResetPasswordSchema),
  });

  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit((values) => props.onSubmit(values))}>
        <TextInput
          withAsterisk
          label="Enter email address"
          placeholder="Your email address"
          size="md"
          {...form.getInputProps("email")}
        />

        <Group position="apart" mt="lg">
          <Anchor component={Link} href="/login" size="sm">
            <BsArrowLeftShort />
            Back to the login page
          </Anchor>

          <Button type="submit">Reset password</Button>
        </Group>
      </form>
    </Paper>
  );
}
