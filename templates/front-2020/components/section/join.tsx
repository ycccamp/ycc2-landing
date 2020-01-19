import React from 'react'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  PseudoBox,
} from '@chakra-ui/core'

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
        <Heading textAlign='center' size='2xl' pb={10}>
          เลือกสาขา
        </Heading>
        <Flex flexWrap='wrap'>
          {tracks.map(track => (
            <Box
              p={4}
              key={`join-${track.key}`}
              width={['100%', 1 / 2, 1 / 2, 1 / 3]}>
              <PseudoBox
                bg='white'
                p={8}
                borderRadius={20}
                transition='200ms'
                transition-timing-function='ease-out'
                transform='perspective(100px) translateZ(0px)'
                boxShadow='0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                _hover={{
                  transform: 'perspective(100px) translateZ(10px)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}>
                <Link
                  href='https://regis.ycc.in.th'
                  isExternal
                  _hover={{ textDecoration: 'none' }}>
                  <Heading size='md' textAlign='center'>
                    {track.name}
                  </Heading>
                  <Box pt={8}>
                    <AspectRatioBox ratio={3 / 4}>
                      <Image
                        src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                        objectFit='cover'
                      />
                    </AspectRatioBox>
                  </Box>
                </Link>
              </PseudoBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
