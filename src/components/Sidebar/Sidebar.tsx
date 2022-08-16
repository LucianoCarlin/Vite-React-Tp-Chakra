import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Avatar } from "../Avatar";

export function Sidebar() {
  return (
    <Box as="aside" bgColor="gray.800" borderRadius="8px">
      <Image
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        objectFit="cover"
        width="100%"
        height="4.5rem"
        borderTopRightRadius="8px"
        borderTopLeftRadius="8px"
      />
      <Flex alignItems="center" flexDir="column" mt="-1.5rem">
        <Avatar src="https://github.com/lucianocarlin.png" hasBorder />
        <Text mt="1rem" color="gray.100" lineHeight="1.6">
          Luciano Alves
        </Text>
        <Text fontSize="0.875rem" color="gray.400" lineHeight="1.6" mb="2rem">
          Web Developer
        </Text>
      </Flex>
    </Box>
  );
}
