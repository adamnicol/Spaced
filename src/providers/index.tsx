"use client";

import { ReactNode } from "react";
import { MantineProvider } from "@mantine/core";

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};

export default Providers;
