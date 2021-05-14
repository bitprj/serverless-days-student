import { Box, HStack, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CallToActionLink } from './CallToActionLink'

export const Alert = () => (
  <Box as="section" pt="0" pb="0">
    <Box
      bgGradient="linear(to-r, blue.500, purple.500)"
      color="white"
      py="3"
      px={{ base: '3', md: '6', lg: '8' }}
    >
      <HStack spacing="3">
        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: '3', md: '6' }}
          width="full"
        >
          <Text>
            <b>CFPs are open now!</b>
          </Text>
          <Box
    as="a"
    href="https://google.com"
    py="1"
    px="4"
    bg="white"
    color="blue.600"
    fontWeight="semibold"
    rounded="base"
    whiteSpace="nowrap"
    textAlign="center" width={{ base: 'full', sm: 'auto' }} >
            Apply Now
          </Box>
        </Stack>
      </HStack>
    </Box>
  </Box>
)
