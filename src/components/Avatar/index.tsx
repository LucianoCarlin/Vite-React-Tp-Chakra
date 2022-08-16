import { Image } from "@chakra-ui/react";

interface AvatarProps {
  src: string;
  hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = false }: AvatarProps) {
  return (
    <Image
      src={src}
      width="3rem"
      height="3rem"
      borderRadius="8px"
      border={hasBorder ? "2px solid #2a2a2a" : "none"}
      outline={hasBorder ? "2px solid #22543D" : "none"}
      boxSizing="initial"
    />
  );
}
