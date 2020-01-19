import React from 'react'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/core'

export const Schedule: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='schedule'>
      <Box width={[22 / 24, 18 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          ระยะเวลา
        </Heading>
        <Flex flexWrap='wrap' alignItems='center'>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={[8, 8, 12]}>
            <AspectRatioBox ratio={1 / 1}>
              <Image
                src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                rounded='full'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Text textAlign='center' fontSize={['lg', 'lg', 'xl']} pt={4}>
              รับสมัคร
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={[8, 8, 12]}>
            <AspectRatioBox ratio={1 / 1}>
              <Image
                src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                rounded='full'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Text textAlign='center' fontSize={['lg', 'lg', 'xl']} pt={4}>
              ประกาศผล
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={[8, 8, 12]}>
            <AspectRatioBox ratio={1 / 1}>
              <Image
                src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                rounded='full'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Text textAlign='center' fontSize={['lg', 'lg', 'xl']} pt={4}>
              ยืนยันสิทธิ์
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={[8, 8, 12]}>
            <AspectRatioBox ratio={1 / 1}>
              <Image
                src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                rounded='full'
                objectFit='cover'
              />
            </AspectRatioBox>
            <Text textAlign='center' fontSize={['lg', 'lg', 'xl']} pt={4}>
              วันค่าย
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
