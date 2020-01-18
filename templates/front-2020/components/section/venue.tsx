import React from 'react'

import { AspectRatioBox, Box, Flex, Heading } from '@chakra-ui/core'

export const Venue: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='venue'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={4}>
          สถานที่
        </Heading>
        <Box pt={6}>
          <AspectRatioBox ratio={16 / 9}>
            <Box>
              <iframe
                width='100%'
                height='100%'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.545051572272!2d100.53856011518413!3d13.745971590351218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eda9868751b%3A0xd8494356492c43e4!2sRISE%20-%20Corporate%20Innovation%20Powerhouse!5e0!3m2!1sen!2sth!4v1579182865873!5m2!1sen!2sth'
              />
            </Box>
          </AspectRatioBox>
        </Box>
      </Box>
    </Flex>
  )
}
