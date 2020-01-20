import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Image } from '@chakra-ui/core'
import { theme } from '../../theme'

export const Gallery: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      py={20}
      minHeight='100%'
      id='gallery'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          ภาพกิจกรรม
        </Heading>
        <Flex justifyContent='center'>
          <Box width={['100%', 14 / 24]} p={2}>
            <AspectRatioBox
              ratio={16 / 9}
              borderRadius={20}
              overflow='hidden'
              boxShadow={[
                theme.shadows.xl,
                theme.shadows.xl,
                theme.shadows['2xl'],
              ]}>
              <Image
                src='/static/images/ycc-2020-1.jpg'
                alt='Gallery Image 1'
                objectFit='cover'
              />
            </AspectRatioBox>
          </Box>
        </Flex>
        <Flex justifyContent='center' flexWrap='wrap'>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
            <AspectRatioBox
              ratio={16 / 9}
              borderRadius={20}
              overflow='hidden'
              boxShadow={theme.shadows.xl}>
              <Image
                src='/static/images/ycc-2020-2.jpg'
                alt='Gallery Image 2'
                objectFit='cover'
              />
            </AspectRatioBox>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
            <AspectRatioBox
              ratio={16 / 9}
              borderRadius={20}
              overflow='hidden'
              boxShadow={theme.shadows.xl}>
              <Image
                src='/static/images/ycc-2020-3.jpg'
                alt='Gallery Image 3'
                objectFit='cover'
              />
            </AspectRatioBox>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
            <AspectRatioBox
              ratio={16 / 9}
              borderRadius={20}
              overflow='hidden'
              boxShadow={theme.shadows.xl}>
              <Image
                src='/static/images/ycc-2020-4.jpg'
                alt='Gallery Image 4'
                objectFit='cover'
              />
            </AspectRatioBox>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 4]} p={2}>
            <AspectRatioBox
              ratio={16 / 9}
              borderRadius={20}
              overflow='hidden'
              boxShadow={theme.shadows.xl}>
              <Image
                src='/static/images/ycc-2020-5.jpg'
                alt='Gallery Image 5'
                objectFit='cover'
              />
            </AspectRatioBox>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
