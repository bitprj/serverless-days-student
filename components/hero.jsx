import {
    Box,
    Button,
    Circle,
    Heading,
    Img,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue as mode,
    LightMode,
    Input,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FaPlay } from 'react-icons/fa'
  
  
  export const Hero = ( { heading, description,cta1, cta2, image, play, cta1link, cta2link }) => {
    
    return (
      <Box>
        <Box as="section" bg="gray.800" color="white" pt="7.5rem" bgImage="url('/stars.svg')" >
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} bg="gray.800">
            <Box textAlign="center">
              <Img mx="auto" maxW="48rem" src="/serverless.png"></Img>

              <Text fontSize="3xl" mt="4" maxW="xl" mx="auto" >
                {description}
              </Text>
            </Box>
  
            <Stack
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              mt="10"
              mb="20"
              spacing="4"
            >
              <LightMode>
              <form action="https://submit-form.com/KSm1o9II"  >
              <Stack maxW="md" spacing="4" direction={{ base: 'column', sm: 'row' }}>
                <Input type="email"  name="email" placeholder="Enter your Email" size="lg" />
                <Button
                    type="submit"
                    size="lg"
                    colorScheme="purple"
                    px="12"
                    fontWeight="bold"
                    fontSize="md"
                  >
                  Sign Up Now →
                </Button>
                </Stack>
              </form>


              </LightMode>
            </Stack>
  
            <Box
              mb={{ base: '-20', md: '-40' }}
              className="group"
              position="relative"
              rounded="lg"
              overflow="hidden"
            >
              <center>
              <Img
                alt="Campers"
                src="/becks.svg"
                width="80%"
              />
              </center>
            </Box>
          </Box>
        </Box>
  
        <Box as="section" pt={{ base: '16', md: '40' }} >
        </Box>
      </Box>
    )
  }
  