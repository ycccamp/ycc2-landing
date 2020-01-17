import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Image } from '@chakra-ui/core'

const Gallery: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      py={12}
      bg='gray.200'
      minHeight='100%'
      id='gallery'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
        <Heading textAlign='center' size='xl' pb={4}>
          ภาพกิจกรรม
        </Heading>
        <Box pt={6}>
          <Flex justifyContent='center'>
            <Box width={['100%', 14 / 24]} p={2}>
              <AspectRatioBox ratio={16 / 9}>
                <Image
                  src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
          </Flex>
          <Flex justifyContent='center' flexWrap='wrap'>
            <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
              <AspectRatioBox ratio={16 / 9}>
                <Image
                  src='https://storage.rayriffy.com/files/image/38947047_p0.png'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
            <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
              <AspectRatioBox ratio={16 / 9}>
                <Image
                  src='https://storage.rayriffy.com/files/image/55204389_p0.png'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
            <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
              <AspectRatioBox ratio={16 / 9}>
                <Image
                  src='https://storage.rayriffy.com/files/image/75522689_p0.png'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
            <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
              <AspectRatioBox ratio={16 / 9}>
                <Image
                  src='https://storage.rayriffy.com/files/image/10769220_p0.jpg'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default Gallery
