import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Img,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { SponsorCard } from "../Cards/SponsorCard";
import { BlueLine } from "../Buttons/BlueLine";

export const Sponsors = () => {
  return (
    <Box as="section" color="white" mt={5} id="sponsors">
      <Heading
        fontSize="3xl"
        letterSpacing="tight"
        fontWeight="extrabold"
        align="center"
      >
        Title Tier
      </Heading>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 2 }}
        mt="8"
        spacing="40"
        alignItems="center"
        color={mode("inherit", "white")}
        justify="center"
      >
        <SponsorCard
          img="/microsoft.png"
          href="https://www.microsoft.com/en-us/"
        />
        <SponsorCard img="/courier-logo.png" href="https://www.courier.com/" />
      </SimpleGrid>
      {/* <Button>Sponsor Us</Button> */}
      <Box textAlign="center" mt={4}>
        <BlueLine href="mailto:info@bitproject.org">
          Interested in Sponsoring?
        </BlueLine>
      </Box>
    </Box>
  );
};
