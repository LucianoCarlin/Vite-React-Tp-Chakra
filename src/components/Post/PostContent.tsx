import { ChangeEvent, useState } from "react";
import { Box, Button, Link, Text, Textarea } from "@chakra-ui/react";
import { PostContentStyles } from "./PostContentStyle";

export function PostContent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length >= 1) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <Box mt="1.5rem">
      <PostContentStyles text="Fala galeraa" />
      <PostContentStyles
        text="Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
        aqui em casa"
      />
      <PostContentStyles text="Luciano Alves" />
      <PostContentStyles text="#rocketseat" link={true} />

      <Box
        as="form"
        width="100%"
        mt="1.5rem"
        pt="1.5rem"
        borderTop="1px solid #4A5568"
      >
        <Text lineHeight="1.6" color="gray.200">
          Deixe seu feedback
        </Text>

        <Textarea
          placeholder="Deixe seu comentario"
          width="100%"
          height="6rem"
          p="1rem"
          borderRadius="8px"
          bgColor="gray.900"
          border="0"
          resize="none"
          lineHeight="1.4"
          mt="1rem"
          focusBorderColor="green.700"
          onChange={handleChangeTextArea}
        />

        <Button
          paddingX={4}
          paddingY={6}
          mt="1rem"
          borderRadius={8}
          fontWeight="bold"
          bgColor="green.800"
          color="white"
          disabled={isVisible}
          _hover={{
            bgColor: "green.900",
          }}
        >
          Publicar
        </Button>
      </Box>
    </Box>
  );
}
