import { Box, Center, Heading, SimpleGrid, Img, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Sponsors = () => {
  return (
    // sponsor text
    <Box as="section" py="16" bg="black" color="white">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Heading align="center" size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
          Sponsors
        </Heading>
        <Heading size="lg" letterSpacing="tight" mb="5" fontWeight="extrabold" align="center">
          Founding Tier
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4 }}
          mt="8"
          mb="8"
          spacing="10"
          alignItems="center"
          color={mode('inherit', 'white')}
          justify="center"
        >
          <Img src="https://www.reshiftsecurity.com/wp-content/uploads/2020/02/AWS3.png" />
          <Img src="/courier-logo.png" marginTop="-10" />
        </SimpleGrid>
        <Heading size="lg" letterSpacing="tight" mb="5" fontWeight="extrabold" align="center">
          Logo Tier
        </Heading>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 4 }}
          mt="8"
          mb="8"
          alignItems="center"
          spacing="10"
          color={mode('inherit', 'white')}
        >
          <Img src="/newRelicLogo.png" />
        </SimpleGrid>
      </Box>
    </Box>
  )
}
