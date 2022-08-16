import { Box, Text, Flex } from "@chakra-ui/react";
import { Avatar } from "../Avatar";

interface PostHeaderProps {
  name: string;
  role: string;
  publishedAt: String;
  avatar: string;
}

export function PostHeader({
  name,
  role,
  publishedAt,
  avatar,
}: PostHeaderProps) {
  return (
    <Flex
      as="header"
      alignItems={["flex-start", "flex-start", "center"]}
      justifyContent="space-between"
      flexDirection={["column", "column", "row"]}
    >
      <Flex alignItems="center" gap="1rem">
        <Avatar src={avatar} hasBorder />
        <Box>
          <Text color="gray.100" lineHeight="1.6">
            {name}
          </Text>
          <Text color="gray.600" lineHeight="1.6" fontSize="0.875rem">
            {role}
          </Text>
        </Box>
      </Flex>

      <Box
        as="time"
        title="16 de agosto às 20:00h"
        dateTime="2022-08-16 20:00:00"
        fontSize="0.875rem"
        color="gray.500"
        ml="4.3rem"
      >
        {publishedAt}
      </Box>
    </Flex>
  );
}
