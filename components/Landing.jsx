import { Box, Text, Img, HStack } from "@chakra-ui/react";
import { BlueBg } from "./Buttons/BlueBg";
import { BlueLine } from "./Buttons/BlueLine";
export const Landing = () => {
  return (
    <Box
      minH="80vh"
      // bg="linear-gradient( rgba(0, 0, 0, 0.5), rgba(23, 25, 35, 1) ), url('landing.JPG') top center"
      bgSize="cover"
    >
      <Box h="1" py={16} />

      <Img src="/updated_logo.png" maxH="250px" mx="auto" />
      <Box textAlign="center">
        <Text
          fontSize="3xl"
          fontWeight="semibold"
          color="gray.400"
          mt={-8}
          mb={0}
        >
          Explore, Learn, and Build with Serverless
        </Text>

        <Text fontSize="lg" fontWeight="" color="gray.400" my={2}>
          August 20-21, 2022 | Online
        </Text>

        <HStack justifyContent="center" mt={3} spacing={4}>
          <BlueLine href="https://airtable.com/shrcvcTLLApodQJYG">
            Submit your CFP
          </BlueLine>
          <BlueBg href="https://airtable.com/shrNjoawKZLej3fa1">
            Reserve your spot
          </BlueBg>
        </HStack>
      </Box>
    </Box>
  );
};
