import React from 'react'

import Head from 'next/head'

import {
  Box,
  CSSReset,
  Flex,
  Image,
  Text,
  ThemeProvider,
} from '@chakra-ui/core'

import { theme } from '../theme'

import Fonts from './fonts'

const ComingSoonComponent: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Fonts />
      <Head>
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <link rel='apple-touch-icon-precomposed' href='/static/favicon.ico' />
      </Head>
      <Flex
        height='100%'
        justifyContent='center'
        alignItems='center'
        background='linear-gradient(to top, rgb(153, 204, 255), rgb(255, 255, 255))'>
        <Box>
          <Flex justifyContent={`center`}>
            <Box width={[14 / 24, 12 / 24, 10 / 24, 8 / 24]}>
              <Image src='/static/images/ycclogo.png' alt='YCC 1 Logo' />
            </Box>
          </Flex>
          <Box px={3} py={2}>
            <Text textAlign='center' fontWeight={100} fontSize='6xl'>
              Young Creator's Camp
            </Text>
            <Text textAlign='center' fontSize='3xl' pt={4}>
              ค่ายเปลี่ยนวัยมันส์เป็น “นักสร้างสรรค์” กำลังจะกลับมาเร็วๆ นี้
            </Text>
          </Box>
        </Box>
      </Flex>
    </ThemeProvider>
  )
}

export default ComingSoonComponent
