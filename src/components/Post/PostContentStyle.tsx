import { Link, Text } from "@chakra-ui/react";

interface PostContentStylesProps {
  link?: boolean;
  text: string;
}

export function PostContentStyles({
  link = false,
  text,
}: PostContentStylesProps) {
  return link ? (
    <Text lineHeight="1.6" color="gray.500" mt="1rem">
      <Link href="/" textDecoration="none" color="green.600">
        {text}
      </Link>
    </Text>
  ) : (
    <Text lineHeight="1.6" color="gray.500" mt="1rem">
      {text}
    </Text>
  );
}
