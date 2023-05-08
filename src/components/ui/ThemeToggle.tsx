"use client";

import { useMantineTheme } from "@mantine/core";
import { FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const theme = useMantineTheme();

  return <FaMoon />;
}
