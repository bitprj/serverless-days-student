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
import styles from './Features.module.css'

export const Features = ({title, p1, p2, img}) => {
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
              {title}
            </Heading>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mb="6"
              maxW="md"
              color="#e0e0e0"
            >
              {p1}
            </Text>
            <Text
              fontSize={{
                md: '2xl',
              }}
              mb="6"
              maxW="md"
              color="#e0e0e0"
            >
              {p2}
            </Text>
          </Box>
          <Img
            htmlWidth="500px"
            htmlHeight="320px"
            height={{
              md: '320px',
            }}
            objectFit="contain"
            src={img}
            alt="Octologo"
            className={styles.image}
          />
          
        </SimpleGrid>
      </Box>
    </Box>
  )
}
