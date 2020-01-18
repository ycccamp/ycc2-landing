import React from 'react'

import Head from 'next/head'

import { Box, Flex, Image, Text } from '@chakra-ui/core'

import Fonts from './fonts'

const ComingSoonComponent: React.FC = props => {
  return (
    <React.Fragment>
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
              <Image src='/static/images/ycclogo.png' />
            </Box>
          </Flex>
          <Box px={3} py={2}>
            <Text
              textAlign='center'
              fontWeight={100}
              fontSize='6xl'
              fontFamily={`'FC Lamoon','CS ChatThai',-apple-system,'Helvetica Neue',Helvetica,Arial,system-ui,sans-serif`}>
              Young Creator's Camp
            </Text>
            <Text
              textAlign='center'
              fontSize='3xl'
              pt={4}
              fontFamily={`'FC Lamoon','CS ChatThai',-apple-system,'Helvetica Neue',Helvetica,Arial,system-ui,sans-serif`}>
              ค่ายเปลี่ยนวัยมันส์เป็น “นักสร้างสรรค์” กำลังจะกลับมาเร็วๆ นี้
            </Text>
          </Box>
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default ComingSoonComponent
