import React from 'react'

import { Flex, Box, Image, Text } from '@chakra-ui/core'

const ComingSoonComponent: React.FC = props => {
  return (
    <Flex height='100%' justifyContent='center' alignItems='center'>
      <Box>
        <Flex justifyContent={`center`}>
          <Box width={[14 / 24, 12 / 24, 10 / 24, 8 / 24]}>
            <Image src='/static/images/ycclogo.png' />
          </Box>
        </Flex>
        <Box px={3} py={2}>
          <Text textAlign='center' fontWeight={100} fontSize='6xl'>Young Creator's Camp</Text>
          <Text textAlign='center' fontSize='3xl' pt={4}>ค่ายเปลี่ยนวัยมันส์เป็น “นักสร้างสรรค์” กำลังจะกลับมาเร็วๆ นี้</Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default ComingSoonComponent
