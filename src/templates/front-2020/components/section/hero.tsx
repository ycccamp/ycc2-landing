import React, { useContext } from 'react'

import Img from 'gatsby-image'

import { Box, Button, Flex, PseudoBox, Text, useTheme } from '@chakra-ui/core'
import { css } from '@emotion/core'

import { Fluid } from '../../../../pages'

export const Hero: React.FC = props => {
  const theme = useTheme()

  const context = useContext(Fluid)

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='hero'>
      <Box px={4}>
        <Flex justifyContent='center' pb={10}>
          <Box maxWidth='180px' width={1 / 2}>
            <PseudoBox objectFit='cover'>
              <Img
                fluid={context.logo}
                style={{
                  filter: 'drop-shadow(2px 4px 6px rgba(65, 147, 164, 0.32))',
                }}
              />
            </PseudoBox>
          </Box>
        </Flex>
        <Text
          as='h2'
          textAlign='center'
          fontWeight='bold'
          lineHeight='shorter'
          fontFamily={theme.fonts.heading}
          fontSize={['2xl', '2xl', '3xl', '4xl']}>
          Young Creator's Camp 2
        </Text>
        <Text
          py={4}
          textAlign='center'
          fontWeight='bold'
          fontSize={['md', 'md', 'lg', 'xl']}>
          วันที่ 20 - 23 มีนาคม 2563
        </Text>
        <Flex justifyContent='center'>
          <Box background='white' borderRadius={15} overflow='hidden'>
            <Button
              px={[12, 12, 20]}
              size='lg'
              variantColor='flory'
              isDisabled={true}>
              <Text>เปิดรับสมัครวันที่ 28 มกราคม</Text>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
