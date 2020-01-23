import React from 'react'

import Img from 'gatsby-image'

import { AspectRatioBox, Box, Flex, Heading } from '@chakra-ui/core'
import { theme } from '../../theme'

export const Gallery: React.FC = props => {
  const generateFluid = (src: string, size: number = 600) => {
    const images = require(`../../../../../assets/image/2020/${src}?resize&sizes[]=200&sizes[]=400&sizes[]=600`)
    const webP = require(`../../../../../assets/image/2020/${src}?webp`)
    const trace = require(`../../../../../assets/image/2020/${src}?trace`).trace

    const res = {
      src: images.src,
      srcSet: images.srcSet,
      srcWebp: webP,
      tracedSVG: trace,
      aspectRatio: images.width / images.height,
      sizes: `(max-width: ${size}px) 100vw, ${size}px`,
    }

    return res
  }

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
                <Img fluid={generateFluid('gallery-1.jpg')} />
              </Box>
            </AspectRatioBox>
          </Box>
        </Flex>
        <Flex justifyContent='center' flexWrap='wrap'>
          {[2, 3, 4, 5].map(o => {
            return (
              <Box
                width={['100%', 1 / 2, 1 / 2, 1 / 4]}
                p={2}
                key={`gallery-${o}`}>
                <AspectRatioBox
                  ratio={16 / 9}
                  borderRadius={20}
                  overflow='hidden'
                  boxShadow={theme.shadows.xl}>
                  <Box objectFit='cover'>
                    <Img fluid={generateFluid(`gallery-${o}.jpg`)} />
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
