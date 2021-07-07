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
  
  
  export const Hero = ( { heading, description, cta1, cta2, image, play, cta1link, cta2link }) => {
    const removeInput = event => {
      document.getElementById('email').remove()
      document.getElementById('signup').remove()
      document.getElementById('formResponse').innerText = "Thanks! See you soon ❤️"
    
    }

    return (
      <Box cursor="url(/cursor.png), auto"> 
        <Box as="section" bg="black" color="white" pt="7.5rem">
          <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
            <Box textAlign="center">
              <Img mx="auto" maxW="48rem" width="100%" src="/serverless.png"></Img>

              <Text fontSize="3xl" mt="4" maxW="xl" mx="auto" >
                {description}
              </Text>
            </Box>
  
            <Stack
              justify="center"
              direction={{ base: 'column', md: 'row' }}
              mt="10"
              mb="5"
              spacing="4"
            >
              <LightMode>
              <form onSubmit={removeInput} action="https://submit-form.com/KSm1o9II"  >
              <Stack maxW="md" spacing="4" direction={{ base: 'column', sm: 'row' }}>
                <Input type="hidden" name="_redirect" value="/"/>
                <Input id="email" type="email"  name="email" placeholder="Enter your Email" size="lg" />
                <Button
                    type="submit"
                    id="signup"
                    size="lg"
                    colorScheme="purple"
                    px="12"
                    _hover={{
                      cursor: "url(/cursorHover.png), auto"
                    }}
                    fontWeight="bold"
                    fontSize="md"
                  >
                  Sign Up Now →
                </Button>
                </Stack>
              </form>
              </LightMode>
              
            </Stack>
            <Box textAlign="center" mb="25">

            <Text id="formResponse" fontSize="3xl" mt="4" maxW="xl" mx="auto" >
            </Text>

            <Text fontSize="2xl" maxW="xl" mx="auto" color="gray.300">
                August 15th, 2021 | Online
              </Text>
            </Box>

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
  