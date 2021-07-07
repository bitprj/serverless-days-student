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
import { BsFillGridFill, BsPlusCircleFill, BsShieldLockFill, BsArrowRight } from 'react-icons/bs'
import { Feature } from './Feature'

export const Features = () => {
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
          
          <Box>
            <Heading size="2xl" mb="12" fontWeight="extrabold">
              About the conference
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mb="6"
              maxW="md"
              color="#e0e0e0"
            >
              <a href="https://bitproject.org">Bit Project</a> is super excited to announce Serverless Days : Student Edition, a virtual conference for folks starting their journey with serverless. <br></br><br></br>
               From boot campers to experienced engineers who want to break into serverless, this conference will showcase unique serverless projects as well as tips and tricks for getting started. 
            </Text>
          </Box>
          <Img
            htmlWidth="500px"
            htmlHeight="320px"
            height={{
              md: '320px',
            }}
            objectFit="contain"
            src="/octo.png"
            alt="Octologo"
          />
          
        </SimpleGrid>
      </Box>
    </Box>
  )
}
