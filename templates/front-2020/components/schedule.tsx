import React from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/core'

const Schedule: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={12}
      bg='gray.200'>
      <Box width={[22 / 24, 18 / 24]}>
        <Heading textAlign='center' size='xl' pb={4}>
          ระยะเวลา
        </Heading>
        <Flex flexWrap='wrap' alignItems='center' pt={6}>
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

export default Schedule
