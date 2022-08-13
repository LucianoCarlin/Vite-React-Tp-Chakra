import { Box, Text, Flex } from "@chakra-ui/react";
import { Avatar } from "../Avatar";

export function PostHeader() {
  return (
    <Flex as="header" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="1rem">
        <Avatar />
        <Box>
          <Text color="gray.100" lineHeight="1.6">
            Luciano Alves
          </Text>
          <Text color="gray.600" lineHeight="1.6" fontSize="0.875rem">
            Web Developer Front-end
          </Text>
        </Box>
      </Flex>

      <Box
        as="time"
        title="11 de maio às 08:15h"
        dateTime="2022-05-11 01:13:00"
        fontSize="0.875rem"
        color="gray.500"
      >
        Publicado a 1h
      </Box>
    </Flex>
  );
}
