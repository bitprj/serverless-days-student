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
    const subscribeEmail = async event => {
      event.preventDefault()
      let email = document.getElementById('email').value
      let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  
      if (email == "") {
        return;
      }
      else if (!emailRegex.test(email)) {
        return;
      }
      console.log(`Subscribing ${email} to newsletter...`)
  
      const res = await fetch(`/api/subscribe`,
        {
          body: JSON.stringify({
            email: email
          }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST'
        }
      )
  
      let result = await res.json()      
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
              <form action="https://live.bitproject.org">
              <Stack maxW="md" spacing="4" direction={{ base: 'column', sm: 'row' }}>

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
            <br></br>
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
  
