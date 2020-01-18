import React from 'react'

import { Box, Button, Flex, Heading } from '@chakra-ui/core'

export const Join: React.FC = props => {
  const tracks = [
    {
      key: 'programming',
      name: 'Programming',
    },
    {
      key: 'design',
      name: 'Design',
    },
    {
      key: 'creative',
      name: 'Creative',
    },
  ]

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='join'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
        <Heading textAlign='center' size='2xl' pb={4}>
          เลือกสาขา
        </Heading>
        <Flex pt={6} flexWrap='wrap'>
          {tracks.map(track => (
            <Box
              p={4}
              key={`join-${track.key}`}
              width={['100%', 1 / 2, 1 / 2, 1 / 3]}>
              <Button width='100%'>{track.name}</Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
