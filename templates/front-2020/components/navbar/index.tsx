import React from 'react'

import { Box, Flex, Stack } from '@chakra-ui/core'

import NavLink from './link'

const Navbar: React.FC = props => {
  const nav = [
    {
      text: 'รู้จักค่าย',
    },
  ]

  return (
    <Box
      as='nav'
      height={{ base: '48px' }}
      boxShadow='0px 1px 5px 0px rgba(0, 0, 0, 0.2)'
      position={`fixed`}
      zIndex={80}
      bg='white'
      width={`100%`}
      fontSize={['xs', 'xs', 'xs', 'xs', 'sm']}>
      <Flex justifyContent='center' alignItems='center' width='100%'>
        <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]} height='100%'>
          <Box>
            <Stack isInline={true} spacing={4} height='inherit'>
              {nav.map((item, i) => (
                <NavLink key={`navbar-item-${i}`} href={'/'} {...item} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
