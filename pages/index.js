import Head from 'next/head'
import Image from 'next/image'
import * as React from 'react'
import { Hero } from './../components/hero'
import { Alert } from './../components/alert'
import { Features } from './../components/feature'
import { Footer } from './../components/footer'
import { Team } from './../components/team'

export default function Home() {


  return (
    <div>
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

      <Features/>
      <Team />
      <Footer />
      </div>
  )
}
