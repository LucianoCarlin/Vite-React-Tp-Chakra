import { Box, Text } from "@chakra-ui/react";
import { Comment } from "../Comment/Comment";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";

export function Post() {
  return (
    <Box
      as="article"
      bgColor="gray.800"
      borderRadius="8px"
      p="2.5rem"
      mb="2rem"
    >
      <PostHeader />
      <PostContent />

      <Box mt="2rem">
        <Comment />
        <Comment />
        <Comment />
      </Box>
    </Box>
  );
}
