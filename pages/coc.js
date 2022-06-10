import Head from "next/head";
import * as React from "react";
import { SmSep } from "../components/Separators/SmSep";
import { Box, Container, Text, Heading, VStack } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";

export default function Home() {
  return (
    <>
      <Head>
        <title>Serverless Days: Student Edition</title>
        <meta
          name="description"
          content="We are a virtual conference for students, by students learning serverless"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Box bg="gray.900" mt={32}>
        <Container maxW="container.xl">
          <VStack spacing={8}>
            <HeadingWithDesc textAlign="center">
              Code of Conduct
            </HeadingWithDesc>
            <Text color="gray.100" fontSize="md" fontWeight="semibold">
              All attendees, speakers, sponsors and volunteers at our conference
              are required to agree with the following code of conduct.
              Organisers will enforce this code throughout the event. We expect
              cooperation from all participants to help ensure a safe
              environment for everybody.
            </Text>

            <HeadingWithDesc textAlign="left">
              The Quick Version
            </HeadingWithDesc>

            <Text color="gray.100" fontSize="md" fontWeight="semibold">
              Our conference is dedicated to providing a harassment-free
              conference experience for everyone, regardless of gender, gender
              identity and expression, age, sexual orientation, disability,
              physical appearance, body size, race, ethnicity, religion (or lack
              thereof), or technology choices. We do not tolerate harassment of
              conference participants in any form. Sexual language and imagery
              is not appropriate for any conference venue, including talks,
              workshops, parties, Twitter and other online media. Conference
              participants violating these rules may be sanctioned or expelled
              from the conference without a refund at the discretion of the
              conference organisers.
            </Text>

            <HeadingWithDesc textAlign="left">
              The Less Quick Version
            </HeadingWithDesc>
            <Box>
              <Text color="gray.100" fontSize="md" fontWeight="semibold">
                Harassment includes offensive verbal comments related to gender,
                gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, race, ethnicity,
                religion, technology choices, sexual images in public spaces,
                deliberate intimidation, stalking, following, harassing
                photography or recording, sustained disruption of talks or other
                events, inappropriate physical contact, and unwelcome sexual
                attention.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                Participants asked to stop any harassing behavior are expected
                to comply immediately.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                Sponsors are also subject to the anti-harassment policy. In
                particular, sponsors should not use sexualised images,
                activities, or other material. Booth staff (including
                volunteers) should not use sexualised
                clothing/uniforms/costumes, or otherwise create a sexualised
                environment.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                If a participant engages in harassing behavior, the conference
                organisers may take any action they deem appropriate, including
                warning the offender or expulsion from the conference with no
                refund.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                If you are being harassed, notice that someone else is being
                harassed, or have any other concerns, please contact a member of
                conference staff immediately. Conference staff can be identified
                as they'll be wearing branded clothing and/or badges.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                Conference staff will be happy to help participants contact
                hotel/venue security or local law enforcement, provide escorts,
                or otherwise assist those experiencing harassment to feel safe
                for the duration of the conference. We value your attendance.
              </Text>

              <Text color="gray.100" fontSize="md" fontWeight="semibold" mt={3}>
                We expect participants to follow these rules at conference and
                workshop venues and conference-related social events.
              </Text>
            </Box>
          </VStack>
        </Container>
        <SmSep />
      </Box>
    </>
  );
}
