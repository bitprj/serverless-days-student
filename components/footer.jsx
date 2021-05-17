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
    Container,
    WrapItem
  } from '@chakra-ui/react'
  import * as React from 'react'


  export const Footer = () => {
return(
<Box as="section" bg="gray.800" color="white" pt="3.5rem" pb="3.5rem" >
<SimpleGrid columns={6} spacing={{ base: '4', lg: '8' }} maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} >
  <Img src="/serverless.png" pr="25px"></Img>
  <Box>
    <WrapItem color="#fff" fontSize="md" as="a" href="https://bitproject.org">
      Code of Conduct
    </WrapItem>
  </Box>
  <Box>
    <WrapItem color="#fff" fontSize="md" as="a" href="https://bitproject.org">
      Bit Project
    </WrapItem>
  </Box>
  <Box>
    <WrapItem color="#fff" fontSize="md" as="a" href="mailto:student@serverlessdays.io">
      Contact Us
    </WrapItem>
  </Box>
  <Box>
    <WrapItem color="#fff" fontSize="md" as="a" href="https://sessionize.com/serverless-days-student-edition/">
      CFP
    </WrapItem>
  </Box>
</SimpleGrid>
</Box>
)
  }