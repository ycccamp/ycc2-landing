import React from 'react'

import { AspectRatioBox, Box, Flex, Heading, Text } from '@chakra-ui/core'
import { theme } from '../../theme'

export const Venue: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='venue'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 12 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          สถานที่
        </Heading>
        <Text textAlign='center' pt={4} pb={8} fontSize='xl'>
          RISE - Corporate Innovation Powerhouse
        </Text>
        <AspectRatioBox
          ratio={16 / 9}
          borderRadius={20}
          overflow='hidden'
          boxShadow={theme.shadow['2xl']}>
          <Box>
            <iframe
              title='Google Maps'
              width='100%'
              height='100%'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7820.528495474858!2d100.53707049941988!3d13.744384935812343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eda9b36b1d3%3A0xbcc1bbe09f2e2d36!2sAmarin%20Plaza!5e0!3m2!1sen!2sth!4v1580223015570!5m2!1sen!2sth'
            />
          </Box>
        </AspectRatioBox>
      </Box>
    </Flex>
  )
}
