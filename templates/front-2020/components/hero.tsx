import React from 'react'

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/core'

const Hero: React.FC = props => {
  return (
    <Flex justifyContent='center' alignItems='center' minHeight='100%' py={12}>
      <Box px={4}>
        <Flex justifyContent='center'>
          <Image src='/static/images/ycclogo.png' size='2xs' />
        </Flex>
        <Heading pt={2} textAlign='center' size='xl'>
          [ Young Creator's Camp ]
        </Heading>
        <Text py={4} textAlign='center' fontSize='xl'>
          วันที่ 20 - 23 มีนาคม 2563
        </Text>
        <Flex justifyContent='center'>
          <Button px={24} borderRadius='999px'>
            สมัครเลย!
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Hero
