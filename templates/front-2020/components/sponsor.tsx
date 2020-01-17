import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Image } from '@chakra-ui/core'

const Sponsor: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={12}
      bg='gray.200'>
      <Box width={[22 / 24, 19 / 24, 17 / 24, 12 / 24]}>
        <Heading textAlign='center' size='xl' pb={4}>
          ผู้สนับสนุน
        </Heading>
        <Flex
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          pt={6}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <Box
              key={`sponsor-${i}`}
              width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}
              p={6}>
              <AspectRatioBox ratio={1 / 1}>
                <Image
                  src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                  rounded='full'
                  objectFit='cover'
                />
              </AspectRatioBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Sponsor
