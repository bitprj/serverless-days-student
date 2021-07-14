import {
    Box,
    Button,
    Heading,
    Img,
    SimpleGrid,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import styles from './Workshop.module.css'

  export const Workshop = () => {
    return (
        <Box
          as="section"
          py={{
            md: '12',
          }}
          bg="black"
          color="white"
        >
          <Box
            maxW={{
              base: 'xl',
              md: '7xl',
            }}
            mx="auto"
            px={{
              base: '6',
              md: '12',
              lg: '20',
            }}
            py={{
              base: '12',
              md: '20',
            }}
          >
            <SimpleGrid
              columns={{
                base: 1,
                md: 2,
              }}
              spacing="10"
            >
              <Img
                htmlWidth="500px"
                htmlHeight="320px"
                objectFit="contain"
                src="/awsCat.png"
                alt="aws"
                mt="-10"
              />
              <Box>
                <Heading size="2xl" mb="12" fontWeight="extrabold" color="#F3C066">
                  Build a purrfect cat API using AWS and APIs
                </Heading>
                <Text
                  fontSize={{
                    md: '2xl',
                  }}
                  mb="6"
                  maxW="md"
                  color="#e0e0e0"
                >
                  <b className={styles.standOut}>Never programmed before</b> but want to learn how to build an awesome website that gives out pictures of the cutest cats? Come join us at our <b className={styles.standOut}>Amazon Web Services Workshop</b> to learn, build, and deploy Catti, a personalized cat generator. 
                   
                </Text>

                <Text
                  fontSize={{
                    md: '2xl',
                  }}
                  mb="6"
                  maxW="md"
                  color="#e0e0e0"
                >
                    This 1.5 hour workshop culminates in a hackathon, where you're given the opportunity to create the <b className={styles.standOut}>BEST cat API</b> using concepts learned during the workshop. The winner just might earn a <b className={styles.standOut}>big prize</b>!
                   
                </Text>


              </Box>
              
              
            </SimpleGrid>
          </Box>
        </Box>
      )

  }