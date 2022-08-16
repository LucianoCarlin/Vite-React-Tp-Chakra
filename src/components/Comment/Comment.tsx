import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { FaTrashAlt, FaThumbsUp } from "react-icons/fa";
import { Avatar } from "../Avatar";

export function Comment() {
  return (
    <Flex mt="1.5rem" gap="1rem">
      <Avatar src="https://github.com/lucianocarlin.png" />
      <Box flex={1}>
        <Box bgColor="gray.700" borderRadius="8px" p="1rem">
          <Flex
            as="header"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Box>
              <Text fontSize="0.875rem" lineHeight="1.6">
                Luciano Alves
              </Text>
              <Box
                as="time"
                title="11 de maio às 08:15h"
                dateTime="2022-05-11 01:13:00"
                fontSize="0.75rem"
                color="gray.500"
                lineHeight="1.6"
              >
                Cerca de 1h
              </Box>
            </Box>
            <IconButton
              aria-label="Deletar comentário"
              bgColor="transparent"
              border="0"
              color="gray.500"
              _hover={{
                bgColor: "transparent",
                border: "0",
                color: "red.200",
              }}
              icon={<FaTrashAlt cursor="pointer" />}
            />
          </Flex>
          <Text mt="1rem" color="gray.400">
            Muito bom Devon, parabéns
          </Text>
        </Box>

        <Flex
          gap={1}
          mt="1rem"
          alignItems="center"
          cursor="pointer"
          color="gray.400"
          _hover={{
            color: "green.600",
          }}
        >
          <FaThumbsUp />
          <Text>Aplaudir</Text>
          <Text>23</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
