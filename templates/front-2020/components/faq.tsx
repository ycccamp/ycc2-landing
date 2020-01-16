import React from 'react'

import { Box, Flex, Heading, Text } from '@chakra-ui/core'

const FAQ: React.FC = props => {
  return (
    <Flex justifyContent='center' alignItems='center' minHeight='100%' py={12}>
      <Box width={[22 / 24, 18 / 24, 14 / 24, 10 / 24]}>
        <Heading textAlign='center' size='xl' pb={4}>
          คำถามที่พบบ่อย
        </Heading>
        <Text py={6}>WAIT FOR DESIGN</Text>
      </Box>
    </Flex>
  )
}

export default FAQ
