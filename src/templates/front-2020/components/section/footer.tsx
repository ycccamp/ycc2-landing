import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/core'

export const Footer: React.FC = props => {
  return (
    <Box py={12}>
      <Flex justifyContent='center'>
        <Text>Copyright 2019 - 2020</Text>
      </Flex>
      <Flex justifyContent='center'>
        <Text fontWeight='bold'>Young Creator's Camp. All right reserved.</Text>
      </Flex>
    </Box>
  )
}

export default Footer
