import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Box, Flex, Heading, Link, Text } from '@chakra-ui/core'

export const Contact: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='contact'>
      <Box width={[22 / 24, 18 / 24, 14 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={4}>
          Contact Us
        </Heading>
        <Flex
          alignItems='center'
          justifyContent='center'
          flexWrap='wrap'
          pt={6}>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} p={6}>
            <Link href='https://facebook.com/ycccampth' isExternal>
              <Flex
                alignItems='center'
                justifyContent='center'
                bg='blue.500'
                height='300px'
                borderRadius={8}>
                <Box as={FaFacebookF} size='64px' color='white' />
              </Flex>
            </Link>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} p={6}>
            <Link href='https://twitter.com/ycccampth' isExternal>
              <Flex
                alignItems='center'
                justifyContent='center'
                bg='blue.300'
                height='300px'
                borderRadius={8}>
                <Box as={FaTwitter} size='64px' color='white' />
              </Flex>
            </Link>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} p={6}>
            <Link href='https://www.instagram.com/ycccampth' isExternal>
              <Flex
                alignItems='center'
                justifyContent='center'
                bg='orange.500'
                height='300px'
                borderRadius={8}>
                <Box as={FaInstagram} size='64px' color='white' />
              </Flex>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
