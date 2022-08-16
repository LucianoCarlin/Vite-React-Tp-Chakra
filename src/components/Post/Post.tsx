import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { postList } from "../../shared/postList";
import { Comment } from "../Comment/Comment";
import { PostContent } from "./PostContent";
import { PostHeader } from "./PostHeader";

export function Post() {
  const [comments, setComments] = useState([1, 2]);
  return (
    <Box>
      {postList.map((post) => (
        <Box
          as="article"
          bgColor="gray.800"
          borderRadius="8px"
          p="2.5rem"
          mb="2rem"
        >
          <Box key={post.id}>
            <PostHeader
              name={post.author.name}
              role={post.author.role}
              publishedAt={formatDistanceToNow(post.publishedAt, {
                locale: ptBR,
                addSuffix: true,
              })}
              avatar={post.author.avatarUrl}
            />
            <PostContent text={post.content} />
            <Box mt="2rem">
              {comments.map((com) => {
                return <Comment />;
              })}
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

/* format(
  post.publishedAt,
  "d 'de' LLLL 'às' HH:mm'h'",
  {
    locale: ptBR,
  }
) */
