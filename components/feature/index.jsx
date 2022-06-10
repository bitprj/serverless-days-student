import {
  Box,
  Button,
  Heading,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { HeadingWithDesc } from "../Headings/HeadingWithDesc";

export const Features = ({ title, p1, p2, img }) => {
  return (
    <Box as="section">
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        spacing="10"
        alignItems="center"
      >
        <Box>
          <HeadingWithDesc>About the Conference</HeadingWithDesc>

          <Text fontSize="lg" mb="6" color="gray.200">
            {p1}
          </Text>
          <Text fontSize="lg" mb="6" color="gray.200">
            {p2}
          </Text>
        </Box>
        <Img
          htmlWidth="500px"
          htmlHeight="320px"
          height={{
            md: "320px",
          }}
          objectFit="contain"
          src={img}
          alt="Octologo"
        />
      </SimpleGrid>
    </Box>
  );
};
