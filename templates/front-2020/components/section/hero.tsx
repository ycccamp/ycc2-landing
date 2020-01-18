import React from 'react'

import { Box, Button, Flex, Image, Link, Text, useTheme } from '@chakra-ui/core'

export const Hero: React.FC = props => {
  const theme = useTheme()

  const size = 10
  const space = 150

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      backgroundImage={`radial-gradient(rgba(64, 147, 164, 0.5) ${size}px, transparent ${size}px), radial-gradient(rgba(232, 100, 119, 0.5) ${size}px, transparent ${size}px)`}
      backgroundSize={`${space * 2}px ${space * 2}px`}
      backgroundPosition={`0 0, ${space}px ${space}px`}
      py={20}
      id='hero'>
      <Box px={4}>
        <Flex justifyContent='center' pb={4}>
          <Box maxWidth='400px' width={1 / 2}>
            <Image src='/static/images/ycclogo-2020.png' />
          </Box>
        </Flex>
        <Text
          as='h2'
          pt={6}
          textAlign='center'
          fontWeight='bold'
          lineHeight='shorter'
          fontFamily={theme.fonts.heading}
          fontSize={['2xl', '2xl', '3xl']}>
          [ Young Creator's Camp ]
        </Text>
        <Text py={4} textAlign='center' fontSize={['md', 'md', 'lg']}>
          วันที่ 20 - 23 มีนาคม 2563
        </Text>
        <Flex justifyContent='center'>
          <Link href='#join' _hover={{ textDecoration: 'none' }}>
            <Button px={24} borderRadius='999px' variantColor='flory'>
              สมัครเลย!
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}
