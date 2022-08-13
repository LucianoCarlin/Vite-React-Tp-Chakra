import { Image } from "@chakra-ui/react";

export function Avatar() {
  return (
    <Image
      src="https://github.com/lucianocarlin.png"
      width="3rem"
      height="3rem"
      borderRadius="8px"
      border="2px solid #2a2a2a"
      outline="2px solid #22543D"
      boxSizing="initial"
    />
  );
}
