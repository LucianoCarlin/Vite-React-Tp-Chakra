import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Flex
      maxW="70rem"
      marginY="2rem"
      marginX="auto"
      paddingX="1rem"
      paddingY="0"
      display="grid"
      gridTemplateColumns={["1fr", "1fr", "16rem 1fr"]}
      gap="2rem"
      alignItems="flex-start"
    >
      {children}
    </Flex>
  );
}
