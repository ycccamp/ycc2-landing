import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Image } from '@chakra-ui/core'

export const Sponsor: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='sponsor'>
      <Box width={[22 / 24, 20 / 24, 24 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          ผู้สนับสนุน
        </Heading>
        <Flex alignItems='center' justifyContent='center' flexWrap='wrap'>
          <Box width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={6}>
            <AspectRatioBox ratio={1 / 1} background='white'>
              <Image
                src='/static/images/ycc-2020-sponsor-rise.svg'
                alt='RISE'
              />
            </AspectRatioBox>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]} p={6}>
            <AspectRatioBox ratio={1 / 1}>
              <Image src='/static/images/ycc-2020-sponsor-svl.svg' alt='SVL' />
            </AspectRatioBox>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
