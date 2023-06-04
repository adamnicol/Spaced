"use client";

import Link from "next/link";
import { Button } from "@mantine/core";

export function AccountLinks() {
  return (
    <Button.Group>
      <Button variant="outline" component={Link} href="/login">
        Login
      </Button>
      <Button variant="gradient" component={Link} href="/register">
        Register
      </Button>
    </Button.Group>
  );
}
