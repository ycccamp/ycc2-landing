import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Image } from '@chakra-ui/core'

export const Sponsor: React.FC = props => {
  const sponsors = ['rise', 'svl', 'dekd']

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='sponsor'>
      <Box width={[22 / 24, 20 / 24, 22 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          ผู้สนับสนุน
        </Heading>
        <Flex alignItems='center' justifyContent='center' flexWrap='wrap'>
          {sponsors.map(sponsor => (
            <Box
              key={`sponsor-${sponsor}`}
              width={[1 / 2, 1 / 2, 1 / 4, 1 / 4]}
              p={6}>
              <AspectRatioBox ratio={1 / 1}>
                <Flex objectFit='cover' alignItems='center'>
                  <Image
                    src={require(`../../../../../assets/image/2020/sponsor-${sponsor}.svg`)}
                    alt={sponsor}
                  />
                </Flex>
              </AspectRatioBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Sponsor
