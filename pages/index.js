import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import { Hero } from './../components/hero'
import { Alert } from './../components/alert'
import { Features } from './../components/feature'
import { Footer } from './../components/footer/index'
import { Team } from './../components/team'
import { Sponsors } from './../components/sponsors'
import { Workshop } from '../components/workshop'
import {
  Box,
} from '@chakra-ui/react'


export default function Home() {

  const playSound = () => {
    let audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  return (
    <Box cursor="url(/cursor.png), auto" onClick={() => playSound()} bg="black">
      <Head>
        <title>Serverless Days: Student Edition</title>
        <meta name="description" content="We are a virtual conference for students, by students learning serverless" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert />
      <Hero
        description="We are a virtual conference for students, by students learning serverless"
        cta1="Submit CFP"
        cta2="RSVP →"
        image="/serverless.png"
        cta1link="https://www.notion.so/bitproject/Welcome-to-Serverless-Camp-e218f86daf4248509350709cd9fa8017"

      />

      <Features />
      <Workshop />
      <Team />
      <Sponsors />
      <Footer />



      <audio className="audio-element">
          <source src="/meow.wav"></source>
        </audio>


    </Box>
  )
}
