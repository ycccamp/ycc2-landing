import React from 'react'

import { AspectRatioBox, Box, Flex, Heading } from '@chakra-ui/core'
import { theme } from '../../theme'

export const Gallery: React.FC = props => {
  const mainImage = require('../../../../../assets/image/2020/gallery-1.jpg?resize&sizes[]=200&sizes[]=300sizes[]=400&sizes[]=600')
  const mainImageWebP = require(`../../../../../assets/image/2020/gallery-1.jpg?webp`)

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
                <picture>
                  <source srcSet={mainImageWebP} type='image/webp' />
                  <source
                    src={mainImage.src}
                    srcSet={mainImage.srcSet}
                    type='image/jpeg'
                  />
                  <img
                    src={mainImage.src}
                    srcSet={mainImage.srcSet}
                    alt='Gallery Image 1'
                  />
                </picture>
              </Box>
            </AspectRatioBox>
          </Box>
        </Flex>
        <Flex justifyContent='center' flexWrap='wrap'>
          {[2, 3, 4, 5].map(o => {
            const image = require(`../../../../../assets/image/2020/gallery-${o}.jpg?resize&sizes[]=200&sizes[]=300sizes[]=400&sizes[]=600`)
            const webP = require(`../../../../../assets/image/2020/gallery-${o}.jpg?webp`)

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
                    <picture>
                      <source srcSet={webP} type='image/webp' />
                      <source
                        src={image.src}
                        srcSet={image.srcSet}
                        type='image/jpeg'
                      />
                      <img
                        src={image.src}
                        srcSet={image.srcSet}
                        alt={`Gallery Image ${o}`}
                      />
                    </picture>
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
