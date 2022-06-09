import { Box, Heading, SimpleGrid, Text, Button } from "@chakra-ui/react";
import * as React from "react";
import { Member } from "./Member";
import { members } from "./_data";

export const Team = () => (
  <Box as="section">
    <Box textAlign="center">
      <Heading size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
        Speakers
      </Heading>
      <Text fontSize="xl" maxW="2xl" mx="auto">
        The inaugural edition of ServerlessDays Student Edition brings us a
        broad array of speakers and topics showcasing unique serverless projects
        as well as tips and tricks for getting started with serverless.
      </Text>
    </Box>
    <SimpleGrid
      mt="20"
      columns={{
        base: 1,
        md: 2,
        lg: 3,
      }}
      spacingX="6"
      spacingY="16"
    >
      {members.map((member, idx) => (
        <Member
          key={idx}
          role={member.role}
          image={member.image}
          name={member.name}
          twitter={member.twitter}
          linkedIn={member.linkedin}
        >
          {member.description}
        </Member>
      ))}
    </SimpleGrid>

    <Button>Submit your CFP</Button>
  </Box>
);
