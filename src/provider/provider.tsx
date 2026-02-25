"use client";

import { ThemeProvider } from "next-themes";
import { apolloClient } from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client/react";
import FullNavbar from "@/components/ui/navbar";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <ApolloProvider client={apolloClient}>
        {pathname !== "/register" && <FullNavbar />}
        {children}
        <Toaster/>
      </ApolloProvider>
    </ThemeProvider>
  );
}
