import {
  Box,
  Flex,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'

export const Member = (props) => {
  const { image, name, role, twitter, linkedIn, children } = props
  return (
    <Flex direction="column" align="center" textAlign="center">
      <Img alt={name} w="40" h="40" rounded="full" objectFit="cover" src={image} />
      <Box mt="4">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontWeight="semibold" color={useColorModeValue('gray.400', 'whiteAlpha.700')}>
          {role}
        </Text>
      </Box>
      <Text
        color="#F3C066"
        maxW={{
          base: 'unset',
          md: '20rem',
        }}
      >
        {children}
      </Text>
      <HStack mt="5">
        <Link isExternal p="3" _hover={{
          cursor: "url(/cursorHover.png), auto"
        }} color={useColorModeValue('blue.600', 'blue.300')} href={twitter} >
          <VisuallyHidden>{`${name}'s Twitter page`}</VisuallyHidden>
          <FaTwitter aria-hidden />
        </Link>

        <Link isExternal p="3" _hover={{
          cursor: "url(/cursorHover.png), auto"
        }} color={useColorModeValue('blue.600', 'blue.300')} href={linkedIn}>
          <VisuallyHidden>{`${name}'s Linkedin page`}</VisuallyHidden>
          <FaLinkedinIn aria-hidden />
        </Link>
      </HStack>
    </Flex>
  )
}
