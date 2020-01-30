import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

import Answer from './answer'

import { faq } from '../../../constants/faq'

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
        <Flex alignItems='flex-start' flexWrap='wrap'>
          {faq.map((question, i) => {
            return (
              <Answer
                key={`question-${i}`}
                question={question.q}
                answer={question.a}
              />
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}

export default FAQ
