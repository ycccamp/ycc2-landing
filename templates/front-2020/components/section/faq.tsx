import React from 'react'

import { Box, Flex, Heading, Text, theme } from '@chakra-ui/core'

import { faq } from '../../constants/faq'

export const FAQ: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='faq'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          คำถามที่พบบ่อย
        </Heading>
        <Flex alignItems='center' flexWrap='wrap'>
          {faq.map((question, i) => {
            return (
              <Box
                key={`question-${i}`}
                width={['100%', '100%', 1 / 2, 1 / 3]}
                p={4}>
                <Box
                  background='white'
                  p={6}
                  boxShadow={theme.shadows['2xl']}
                  borderRadius={20}>
                  <Heading size='md' pb={2}>
                    {question.q}
                  </Heading>
                  <Text>{question.a}</Text>
                </Box>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
