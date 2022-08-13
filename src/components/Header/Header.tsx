import { Flex, Image, Text } from "@chakra-ui/react";
import igniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <Flex width="100%" bg="gray.800" justifyContent="center" paddingY="1.25rem">
      <Image
        height="2.5rem"
        objectFit="cover"
        src={igniteLogo}
        alt="Logotipo Ignite"
      />
    </Flex>
  );
}
