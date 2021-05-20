import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import * as React from 'react'
import { Member } from './Member'
import { members } from './_data'

export const Team = () => (
  <Box as="section">
    <Box
      mx="auto"
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
      px={{
        base: '6',
        md: '8',
      }}
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Box textAlign="center">
        <Heading size="3xl" letterSpacing="tight" mb="5" fontWeight="extrabold">
          Speakers
        </Heading>
        <Text fontSize="xl" maxW="2xl" mx="auto">
          Serverless is a 
        </Text>
      </Box>
      <SimpleGrid
        mt="20"
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacingX="6"
        spacingY="16"
      >
        {members.map((member, idx) => (
          <Member
            key={idx}
            role={member.role}
            image={member.image}
            name={member.name}
            twitter={member.twitter}
            linkedIn={member.linkedin}
          >
            {member.description}
          </Member>
        ))}
      </SimpleGrid>
    </Box>
  </Box>
)
