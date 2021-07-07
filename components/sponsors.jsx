import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Sponsors = () => {
  return (
    <Box as="section" py="16" bg="black" color="white">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading align="center" size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
          Sponsors
        </Heading>
        <Heading size="lg" letterSpacing="tight" mb="5" fontWeight="extrabold">
            Founding Tier
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4 }}
          mt="8"
          mb="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          <Center py="8" px="8" rounded={{ md: 'lg' }}>
            <img src="https://www.reshiftsecurity.com/wp-content/uploads/2020/02/AWS3.png"></img>
          </Center>
        </SimpleGrid>
        <Heading size="lg" letterSpacing="tight" mb="5" fontWeight="extrabold">
            Logo Tier
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 3, md: 4 }}
          mt="8"
          mb="8"
          spacing="6"
          color={mode('inherit', 'white')}
        >
          <Center py="8" px="8"  rounded={{ md: 'lg' }}>
            <img src="/newRelicLogo.png"></img>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
