import React from 'react'

import { FaBars } from 'react-icons/fa'

import { Box, Flex, IconButton, Stack } from '@chakra-ui/core'

import NavLink from './link'

const Navbar: React.FC = props => {
  const nav = [
    {
      text: 'รู้จักค่าย',
      href: '#about',
    },
    {
      text: 'เลือกสาขา',
      href: '#join',
    },
    {
      text: 'ระยะเวลา',
      href: '#schedule',
    },
    {
      text: 'สถานที่',
      href: '#venue',
    },
    {
      text: 'คำถามที่พบบ่อย',
      href: '#faq',
    },
    {
      text: 'ผู้สนับสนุน',
      href: '#sponsor',
    },
  ]

  return (
    <Box
      as='nav'
      boxShadow={['none', 'none', '0px 1px 5px 0px rgba(0, 0, 0, 0.2)']}
      position='fixed'
      zIndex={80}
      bg='white'
      width='100%'
      fontSize={['xs', 'xs', 'xs', 'xs', 'sm']}>
      <Flex
        justifyContent={['flex-end', 'flex-end', 'center']}
        alignItems='center'
        height='100%'>
        <Flex
          width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}
          justifyContent='center'
          display={['none', 'none', 'flex', 'flex']}
          alignItems='center'
          height='100%'>
          <Stack isInline={true} spacing={4} height='inherit'>
            {nav.map((item, i) => (
              <NavLink key={`navbar-item-${i}`} {...item} />
            ))}
          </Stack>
        </Flex>
        <Box display={['block', 'block', 'none']} p={4}>
          <IconButton aria-label='Menu' icon={FaBars} size='lg' />
        </Box>
      </Flex>
    </Box>
  )
}

export default Navbar
