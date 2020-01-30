import React from 'react'

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import { AspectRatioBox, Box, Flex, Heading, Link } from '@chakra-ui/core'

export const Contact: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='contact'>
      <Box width={[22 / 24, 18 / 24, 14 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          Contact Us
        </Heading>
        <Flex alignItems='center' justifyContent='center' flexWrap='wrap'>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} maxWidth={`200px`} p={6}>
            <Link
              href='https://facebook.com/ycccampth'
              isExternal
              aria-label='Facebook'>
              <AspectRatioBox
                ratio={1 / 1}
                bg='facebook.500'
                borderRadius={999}>
                <Flex alignItems='center' justifyContent='center'>
                  <Box as={FaFacebookF} size='64px' color='white' />
                </Flex>
              </AspectRatioBox>
            </Link>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} maxWidth={`200px`} p={6}>
            <Link
              href='https://twitter.com/ycccampth'
              isExternal
              aria-label='Twitter'>
              <AspectRatioBox ratio={1 / 1} bg='twitter.500' borderRadius={999}>
                <Flex alignItems='center' justifyContent='center'>
                  <Box as={FaTwitter} size='64px' color='white' />
                </Flex>
              </AspectRatioBox>
            </Link>
          </Box>
          <Box width={['100%', 1 / 2, 1 / 2, 1 / 3]} maxWidth={`200px`} p={6}>
            <Link
              href='https://www.instagram.com/ycccampth'
              isExternal
              aria-label='Instagram'>
              <AspectRatioBox ratio={1 / 1} bg='pink.500' borderRadius={999}>
                <Flex alignItems='center' justifyContent='center'>
                  <Box as={FaInstagram} size='64px' color='white' />
                </Flex>
              </AspectRatioBox>
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Contact
