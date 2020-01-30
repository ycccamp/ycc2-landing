import React, { useContext } from 'react'

import Img from 'gatsby-image'

import { AspectRatioBox, Box, Flex, Heading } from '@chakra-ui/core'
import { theme } from '../../theme'

import { Fluid } from '../../../../pages'

export const Gallery: React.FC = props => {
  const context = useContext(Fluid)

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
              <Box objectFit='cover'>
                <Img fluid={context.gallery.main} />
              </Box>
            </AspectRatioBox>
          </Box>
        </Flex>
        <Flex justifyContent='center' flexWrap='wrap'>
          {context.gallery.sub.map((fluid, i) => {
            return (
              <Box
                width={['100%', 1 / 2, 1 / 2, 1 / 4]}
                p={2}
                key={`gallery-${i + 2}`}>
                <AspectRatioBox
                  ratio={16 / 9}
                  borderRadius={20}
                  overflow='hidden'
                  boxShadow={theme.shadows.xl}>
                  <Box objectFit='cover'>
                    <Img fluid={fluid} />
                  </Box>
                </AspectRatioBox>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default Gallery
