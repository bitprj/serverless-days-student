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
              type="keynote"
              time="8/20 @ 10:00 AM PT"
              title="Serverless Education & CounselorBot"
              desc="Ganning and Emily share their experiences teaching Serverless to students across the United States. We'll also talk about CounselorBot!"
              names={["Ganning Xu", "Emily Chen"]}
              avatars={["/ganning.jpeg", "/emily.jpeg"]}
            />

            <TalkCard
              day={1}
              type="workshop"
              time="8/20 @ 11:30 AM PT"
              title="Build Your Tech Portfolio with John Kilmister"
              desc="There are three crucial tools that a software engineer needs to break into tech: GitHub, LinkedIn, and a Resume. With 17+ years of experience working in software, John Kilmister will share his thoughts on how to make your technical portfolio stand out in job applications."
              names={["John Kilmister"]}
              avatars={["/john.jpeg"]}
            />

            <TalkCard
              day={1}
              type="workshop"
              time="8/20 @ 3:00 PM PT"
              title="Introduction to APIs by Shreya Gupta"
              desc="In this Intro to APIs workshop, we will break down what an API is, understand how engineers use them, and explore the limitless technical solutions that they provide. We will also discuss how and why APIs are crucial to software engineering teams at startups."
              names={["Shreya Gupta"]}
              avatars={["/shreya.jpeg"]}
            />

            <TalkCard
              day={1}
              type="talk"
              time="8/20 @ 1:00 PM PT"
              title="Developing and Deploying Secure Code with AWS Lambda with Tal Melamed"
              desc="Tal has over 15 years experience in security research and engineering and recently co-founded CloudEssence, a cloud-native security company that enables organizations to extend security visibility to applications developed in a serverless architecture. In 2020, CloudEssence was acquired by Contrast Security, where he currently leads the new research center in Italy. Previous to CloudEssence, Tal was head of security research at Protego Labs, a Serverless security start-up that was acquired by Check Point in 2019."
              names={["Tal Melamed"]}
              avatars={["/tal.jpeg"]}
            />

            <TalkCard
              day={1}
              type="talk"
              time="8/20 @ 1:00 PM PT"
              title="Serverless Web Apps with Jamstack with Anthony Chu"
              desc="Serverless is more than just functions. The Jamstack architecture is a serverless approach to building web apps that are fast, scalable, and efficient. Join us in this session to learn how to use serverless technologies to power your entire web stack."
              names={["Anthony Chu"]}
              avatars={["/anthony.jpeg"]}
            />

            <TalkCard
              day={1}
              type="talk"
              time="8/21 @ 1:30 PM PT"
              title="How to Write Node.js Lambda Functions with Luke Hedger"
              desc="In this talk, Luke will walk-through how to write the most awesome Node.js Lambda functions, from project initialization through to deployment and operation. We'll explore folder structure, code standards, dependency management, linting, formatting, static analysis, testing, CI/CD and monitoring. All by employing the latest and greatest standards, as used by serverless experts! We'll also question what we could be doing better and what the future might hold."
              names={["Luke Hedger"]}
              avatars={["/luke.jpeg"]}
            />

            <TalkCard
              day={1}
              type="workshop"
              time="8/20 @ 2:00 PM PT"
              title="Intro to React through Pokémon with Bryan Wong"
              desc="Learning the basics of React and Es6 by building a Pokédex from Pokémon!"
              names={["Bryan Wong"]}
              avatars={["bryan.jpeg"]}
            />

            <TalkCard
              day={2}
              type="workshop"
              time="8/21 @ 10:00 AM PT"
              title="API Integration Demo and Debugging Tutorial with Christian Lechner"
              desc="Integrating software solutions into your webapp can take your projects to the next level in a matter of minutes. Development Architect, Christian Lechner, brings his experience as an Azure MVP to demonstrate the fundamentals of incorporating the GitHub and Dev.to APIs into your Azure HTTP-Trigger Functions."
              names={["Christian Lechner"]}
              avatars={["/christian.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 11:30 AM PT"
              title="Typescript Beyond The Stack with the CDK with Ryan Cormack"
              desc="The modern technology stack traditionally consists of the Frontend, Backend and a Database. But we need a way to get our code from our computer to their server. The AWS Cloud Developer Kit (CDK) is a tool that allows us to write and deploy our infrastructure in languages used to write the rest of the stack, including Typescript. By leveraging the CDK we’re able to write our infrastructure, backend and frontend all in Typescript and even deploy it to Amazon’s serverless compute platform. In this session Ryan will look at the basic concepts behind the CDK, what is happening when you use it and how it allows us to quickly and easily get a full stack Typescript application, with a website, API and database, up and running in a language we are familiar with."
              names={["Ryan Cormack"]}
              avatars={["/ryan.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 12:00 PM PT"
              title="Function Orchestration in the world of Serverless by Daron Yöndem"
              desc="You have a function, or two, or maybe more? Now is the time to talk about making sure you have full control on how data and communication flows between your functions. You need something to control how your functions interact to each other. You need something that can give you granular control, or sometimes maybe a simple user interface to get it done. This session is about your options in Azure to accomplish all that. We will look into Durable Functions and Logic Apps to understand where they can help us scaling our serverless move."
              names={["Daron Yöndem"]}
              avatars={["/daron.png"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 12:30 PM PT"
              title="Business Card Storer and Information Extraction with Azure Functions by Melody Lee"
              desc="The accumulation of business cards from years of networking and travels is inevitable. The storage of these cards can become a hassle, especially as they start to pile up on desks and in wallets. This talk discusses a solution to this issue: a simple SMS-based upload of these business cards to Cosmos DB and extraction of relevant information from the card and online, all of which is then returned to the user."
              names={["Melody Lee"]}
              avatars={["/melody.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 12:45 PM PT"
              title="Helping Purdue Students poop! by Jalynn Chang"
              desc="Take a look at my final project from Serverless Camp. I created a react app with a front end and backend hosted on Azure. My app stores lists of books, movies, songs, etc... and is integrated with online media collections like Imdb, Google Books, and Spotify. "
              names={["Jalynn Chang"]}
              avatars={["/jalynn.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 1:00 PM PT"
              title="Media Collection Web App by Jack Shunn"
              desc="Take a look at my final project from Serverless Camp. I created a react app with a front end and backend hosted on Azure. My app stores lists of books, movies, songs, etc... and is integrated with online media collections like Imdb, Google Books, and Spotify."
              names={["Jack Shunn"]}
              avatars={["/jack.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 1:15 PM PT"
              title="Tired of Making Travel Plans? Try the Newest Trip Generator! by Noah Zhang"
              desc="This website would randomly generate a one-day trip plan for you, based on your inputs of location, favorite attraction categories, transportation method, etc. The trip plan includes multiple destinations' basic information. Between different destinations, there will be a link to Google Map that shows the navigation route between them."
              names={["Noah Zhang"]}
              avatars={["/noah.png"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 1:30 PM PT"
              title="When To Leave For An Event Project by Sania Khaja"
              desc="Take a look at my final project from Serverless Camp. I created a react app with a front end and backend hosted on Azure. My app stores lists of books, movies, songs, etc... and is integrated with online media collections like Imdb, Google Books, and Spotify."
              names={["Sania Khaja"]}
              avatars={["/sania.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 1:45 PM PT"
              title="Saving Money at the Grocery Store with Serverless! by Matthew Morales"
              desc="I'll be presenting my final project as part of BitProject's Serverless Camp! My app is a simple tool to help save money on food by planning shopping trips ahead of time."
              names={["Matthew Morales"]}
              avatars={["/matthew.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 2:00 PM PT"
              title="Serverless: Ship on Day 1 with Luke Hedger"
              desc="Unleash the full power of serverless by shipping your software on day 1 - and every day after that! Let's look at how we can snap together a small set of tools to quickly and simply get your serverless application running in the AWS cloud. Featuring: VS Code, GitHub and AWS. We will explore the basics of local development, infrastructure as code, automated tests, continuous delivery pipelines and observability!"
              names={["Luke Hedger"]}
              avatars={["/luke.jpeg"]}
            />

            <TalkCard
              day={2}
              type="talk"
              time="8/21 @ 2:30 PM PT"
              title="Closing Remarks with Shreya Gupta"
              desc="Wrap up on the talks, workshops, and the 2022 Serverless Days: Student Edition conference."
              names={["Shreya Gupta"]}
              avatars={["/shreya.jpeg"]}
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
            <SpeakerCard
              name="Gareth McCumskey"
              title="Developer Advocate"
              company="Serverless Inc."
              img="/gareth.jpeg"
              twitter="https://twitter.com/garethmcc"
            />

            <SpeakerCard
              name="John Kilmister"
              title="Software Developer & Architect"
              company="Microsoft Azure"
              img="/john.jpeg"
              twitter="https://twitter.com/johnkilmister"
            />
            <SpeakerCard
              name="Tal Melamed"
              title="Software Developer & Architect"
              company="CloudEssence"
              img="/tal.jpeg"
              linkedin="https://www.linkedin.com/in/talmelamed"
            />

            <SpeakerCard
              name="Luke Hedger"
              title="Lead Engineer"
              company="The LEGO Group"
              img="/luke.jpeg"
              twitter="https://twitter.com/level_out"
            />
            <SpeakerCard
              name="Tatiana Cooke"
              title="Principal Product Manager"
              company="AWS"
              img="/tatiana.png"
              linkedin="https://www.linkedin.com/in/tatiana-cooke-a053ab35"
            />
            <SpeakerCard
              name="Christian Lechner"
              title="Development Architect"
              company="SAP"
              img="/christian.jpeg"
              linkedin="https://www.linkedin.com/in/christian-lechner-inthecloud/"
            />

            <SpeakerCard
              name="Ryan Cormack"
              title="Principal Engineer"
              company="Moonpig"
              img="/ryan.jpeg"
              linkedin="https://www.linkedin.com/in/ryancormack"
            />

            <SpeakerCard
              name="Jaap Brasser"
              title="Senior Developer Advocate"
              company="Harness"
              img="/jaap.jpeg"
              linkedin="https://www.linkedin.com/in/JaapBrasser/"
            />

            <SpeakerCard
              name="Bryan Wong"
              title="Software Engineer"
              company="Zenput"
              img="/bryan.jpeg"
              linkedin="https://www.linkedin.com/in/bryanwong1/"
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
