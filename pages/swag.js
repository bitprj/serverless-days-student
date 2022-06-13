import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import { Landing } from "../components/Landing";
import { Features } from "../components/feature";
// import { Footer } from "../components/Footer";
import { Sponsors } from "../components/Sponsors";
import { MedSep } from "../components/Separators/MedSep";
import { SmSep } from "../components/Separators/SmSep";
import { TalkCard } from "../components/Cards/TalkCard";
import { Box, Container, Text, Avatar, Link, HStack } from "@chakra-ui/react";
import { HeadingWithDesc } from "../components/Headings/HeadingWithDesc";
import { SpeakerCard } from "../components/Cards/SpeakerCard";
import { TeamCard } from "../components/Cards/TeamCard";
import { BlueBg } from "../components/Buttons/BlueBg";
import { NavBar } from "../components/NavBar";
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
          <HeadingWithDesc
            desc="Win cool shirts, stickers, and more from Serverless Days: Student Edition!"
            textAlign="center"
          >
            Swag
          </HeadingWithDesc>
          <Box
            bg="gray.700"
            maxW="600px"
            boxShadow={`0px 0px 20px 1px #0DC5F6`}
            _hover={{
              boxShadow: `0px 0px 40px 1px #0DC5F6`,
            }}
            transition="all .2s"
            p={4}
            rounded="md"
            mt={8}
            mx="auto"
          >
            <HStack d="flex" alignItems="center">
              <Avatar src="/bit_logo.png" />
              <Box>
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize="lg"
                  p={0}
                  m={0}
                  lineHeight={5}
                >
                  Bit Project
                </Text>
                <Text color="gray.400" fontSize="sm">
                  @bitprj
                </Text>
              </Box>
            </HStack>
            <Text color="white" mt={3}>
              Tweet about Serverless Days: Student Edition conference and tag{" "}
              <Link
                href="https://twitter.com/bitprj"
                color="blue.300"
                isExternal
              >
                @bitpj
              </Link>{" "}
              to get swag for free!
            </Text>
          </Box>
        </Container>
        <SmSep />
        {/* <Footer /> */}
      </Box>
    </>
  );
}
