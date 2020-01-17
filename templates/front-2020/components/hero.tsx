import React from 'react'

import { Box, Button, Flex, Image, Link, Text, useTheme } from '@chakra-ui/core'

const Hero: React.FC = props => {
  const theme = useTheme()

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={12}
      id='hero'>
      <Box px={4}>
        <Flex justifyContent='center'>
          <Image src='/static/images/ycclogo.png' size='2xs' />
        </Flex>
        <Text
          as='h2'
          pt={2}
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
          <Link href='#join'>
            <Button px={24} borderRadius='999px'>
              สมัครเลย!
            </Button>
          </Link>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Hero
