import React from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/core'

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
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={4}>
            <Text textAlign='center' fontSize='lg'>
              รับสมัคร
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={4}>
            <Text textAlign='center' fontSize='lg'>
              ประกาศผล
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={4}>
            <Text textAlign='center' fontSize='lg'>
              ยืนยันสิทธิ์
            </Text>
          </Box>
          <Box width={[1 / 2, 1 / 2, 1 / 4]} p={4}>
            <Text textAlign='center' fontSize='lg'>
              วันค่าย
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
