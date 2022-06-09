import { Button } from "@chakra-ui/react";

export const BlueLine = ({ href, children }) => {
  return (
    <Button
      as="a"
      href={href}
      target="_blank"
      color="#0aa1c9"
      border="1px solid #0aa1c9"
      bg="transparent"
      px="8"
      fontWeight="semibold"
      fontSize="lg"
      _hover={{
        background: "#0995ba",
        color: "white",
      }}
    >
      {children}
    </Button>
  );
};
