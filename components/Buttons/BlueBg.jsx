import { Button } from "@chakra-ui/react";

export const BlueBg = ({ href, children }) => {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      color="white"
      bg="#0aa1c9"
      px="8"
      fontWeight="semibold"
      fontSize="lg"
      _hover={{
        background: "#0995ba",
      }}
    >
      {children}
    </Button>
  );
};
