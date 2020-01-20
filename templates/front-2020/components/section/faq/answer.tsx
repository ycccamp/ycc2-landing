import React, { useState } from 'react'

import { Box, Collapse, Flex, Heading, Icon, Text } from '@chakra-ui/core'
import { theme } from '../../../theme'

import { IFAQAnswer } from '../../../@types/IFAQAnswer'

const Answer: React.FC<IFAQAnswer> = props => {
  const { question, answer } = props

  const [show, setShow] = useState(false)

  return (
    <Box width={['100%', '100%', 1 / 2, 1 / 3]} p={4}>
      <Box
        background='white'
        p={6}
        boxShadow={theme.shadows['2xl']}
        borderRadius={20}>
        <Box onClick={() => setShow(prev => !prev)}>
          <Flex alignItems='center'>
            <Heading size='md'>{question}</Heading>
            <Box mx='auto' />
            <Icon size='28px' name={show ? 'chevron-down' : 'chevron-left'} />
          </Flex>
        </Box>
        <Collapse pt={2} isOpen={show}>
          {typeof answer === 'string' ? (
            <Text>{answer}</Text>
          ) : (
            <React.Fragment>
              {answer.map((ans, j) => (
                <Text key={`answer-${question}-${j}`} pt={j === 0 ? 0 : 4}>
                  {ans}
                </Text>
              ))}
            </React.Fragment>
          )}
        </Collapse>
      </Box>
    </Box>
  )
}

export default Answer
