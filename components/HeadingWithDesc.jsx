import { Heading, Box, Text } from "@chakra-ui/react";

export const HeadingWithDesc = (props) => {
  return (
    <Box textAlign={props.textAlign} {...props}>
      <Heading
        size="2xl"
        letterSpacing="tight"
        mb=""
        fontWeight="extrabold"
        color="white"
      >
        {props.children}
      </Heading>
      <Text
        fontSize="xl"
        maxW="2xl"
        mt={2}
        color="gray.200"
        mx={props.textAlign == "center" ? "auto" : ""}
      >
        {props.desc}
      </Text>
    </Box>
  );
};
