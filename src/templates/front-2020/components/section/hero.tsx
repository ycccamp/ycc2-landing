import React from 'react'

import { Box, Button, Flex, Image, Link, Text, useTheme } from '@chakra-ui/core'

import { Announcement } from './announcement'

export const Hero: React.FC = props => {
  const theme = useTheme()

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='hero'>
      <Box px={4}>
        <Flex justifyContent='center'>
          <Box minWidth='300px' width={1 / 2}>
            <Image
              src={require(`../../../../../assets/image/2020/logo.svg`)}
              alt='logo'
              style={{
                filter: 'drop-shadow(rgba(65, 147, 164, 0.32) 2px 4px 6px)',
              }}
            />
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
          as='h3'
          pt={2}
          textAlign='center'
          fontWeight={500}
          lineHeight='shorter'
          fontFamily={theme.fonts.heading}
          fontSize={['md', 'md', 'lg', 'xl']}>
          เปลี่ยนเด็กช่างฝัน ให้เป็นนักสร้างสรรค์นวัตกรรม
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
            {/* <Link
              href={`#join`}
              onClick={() =>
                document
                  .querySelector('#join')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              _hover={{ textDecoration: 'none' }}>
              <Button px={[12, 12, 20]} size='lg' variantColor='flory'>
                <Text>สมัครเลย!</Text>
              </Button>
            </Link> */}
            <Announcement />
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Hero
