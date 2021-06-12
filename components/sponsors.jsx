import { Box, Center, Heading, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Sponsors = () => {
  return (
    <Box as="section" py="16">
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
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png"></img>
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
          <Center py="8" px="8" bg={mode('gray.50', 'gray.800')} rounded={{ md: 'lg' }}>
            <img src="https://newrelic.com/themes/custom/curio/assets/mediakit/NR_logo_Horizontal.png"></img>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  )
}
