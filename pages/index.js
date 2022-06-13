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
import { Box, Container, SimpleGrid } from "@chakra-ui/react";
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

      <Box
        bg="linear-gradient( rgba(0, 0, 0, 0.5), rgba(23, 25, 35, 1) ), url('landing.JPG') top center"
        bgSize="cover"
      >
        <Landing />
      </Box>

      <Box bg="gray.900">
        <Container maxW="container.xl">
          <Features
            p1="Bit Project is super excited to announce Serverless Days: Student Edition, a virtual conference for folks starting their journey with serverless."
            p2="From boot campers to experienced engineers who want to break into serverless, this conference will showcase unique serverless projects as well as tips and tricks for getting started."
            img="/octo.png"
          />
          <MedSep line={true} />
          <HeadingWithDesc textAlign="center">
            Workshops, Talks, Presentations
          </HeadingWithDesc>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={16}
            mt={16}
            id="agenda"
          >
            <TalkCard
              day={1}
              type="talk"
              time="8/21 @ 10:00 AM ET"
              title="Serverless Education & CounselorBot"
              desc="Ganning and Emily share their experiences teaching Serverless to students across the United States. We'll also talk about CounselorBot!"
              names={["Ganning Xu", "Emily Chen"]}
              avatars={["/ganning.jpeg", "/emily.jpeg"]}
            />
          </SimpleGrid>
          <MedSep line={true} />
          <HeadingWithDesc
            desc="Connect with our awesome speakers, workshop hosts, and presenters!"
            textAlign="center"
          >
            Speakers
          </HeadingWithDesc>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={8}
            alignItems="center"
            mt={8}
            id="speakers"
          >
            <SpeakerCard
              name="Ganning Xu"
              title="Co-Director of Engineering"
              company="Bit Project"
              img="/ganning.jpeg"
              linkedin="https://www.linkedin.com/in/ganningxu/"
            />
            <SpeakerCard
              name="Emily Chen"
              title="Co-Director of Engineering"
              company="Bit Project"
              img="/emily.jpeg"
              linkedin="https://www.linkedin.com/in/emilyschen/"
            />
          </SimpleGrid>
          <Box textAlign="center" mt={8}>
            <BlueBg href="https://airtable.com/shrcvcTLLApodQJYG">
              Submit your CFP
            </BlueBg>
          </Box>
          <MedSep line={true} />

          <HeadingWithDesc desc="Connect with our team!" textAlign="center">
            Our Team
          </HeadingWithDesc>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3, xl: 3 }}
            spacing={8}
            alignItems="center"
            mt={8}
            id="team"
          >
            <TeamCard
              name="Shreya Gupta"
              title="Co-Founder"
              company="Bit Project"
              img="/shreya.jpeg"
              linkedin="https://www.linkedin.com/in/shreyagg/"
              twitter="https://twitter.com/shreythecray"
            />
            <TeamCard
              name="Ganning Xu"
              title="Co-Director of Engineering"
              company="Bit Project"
              img="/ganning.jpeg"
              linkedin="https://www.linkedin.com/in/ganningxu/"
            />
            <TeamCard
              name="Emily Chen"
              title="Co-Director of Engineering"
              company="Bit Project"
              img="/emily.jpeg"
              linkedin="https://www.linkedin.com/in/emilyschen/"
            />

            <TeamCard
              name="Misha Patel"
              title="Director of Partnerships"
              company="Bit Project"
              img="/misha.jpeg"
              linkedin="https://www.linkedin.com/in/misha-patel17/"
            />

            <TeamCard
              name="Beatrix Cendana"
              title="Student Community Manager"
              company="Bit Project"
              img="/beatrix.jpeg"
              linkedin="https://www.linkedin.com/in/beatrixcendana/"
            />

            <TeamCard
              name="Mac Barnes"
              title="Web Development Intern"
              company="Bit Project"
              img="/mac.jpeg"
              linkedin="https://www.linkedin.com/in/mac-barnes-2a6814218/"
            />

            <TeamCard
              name="Amelia Linton"
              title="Community Management Intern"
              company="Bit Project"
              img="/amelia.jpeg"
            />
            <TeamCard
              name="Avadh Patel"
              title="Community Management Intern"
              company="Bit Project"
            />
          </SimpleGrid>

          <MedSep line={true} />
          <HeadingWithDesc
            desc="Check out our amazing partners!"
            textAlign="center"
          >
            Sponsors
          </HeadingWithDesc>
          <Sponsors />
        </Container>
        <SmSep />
        {/* <Footer /> */}
      </Box>
    </>
  );
}
