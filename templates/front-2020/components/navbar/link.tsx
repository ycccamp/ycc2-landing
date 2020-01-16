import React from 'react'

import { Box, PseudoBox, Text } from '@chakra-ui/core'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { INavbarLinkProps } from '../../@types/INavbarLinkProps'

const NavLink: React.FC<INavbarLinkProps> = props => {
  const { text, href } = props

  const router = useRouter()
  const isActive = router.pathname === href

  const innerLink = (
    <PseudoBox
      display='flex'
      px={3}
      position='relative'
      height={'100%'}
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      cursor='pointer'
      transition='background 0.25 ease'
      _hover={{
        bg: 'gray.50',
      }}
      {...props}>
      <Text fontWeight='medium' userSelect='none'>
        {text}
      </Text>
      <Box
        position='absolute'
        bottom={0}
        padding={'0.1rem'}
        bg='brand.300'
        width='100%'
        transition='all 0.25s ease-in-out'
        opacity={isActive ? 1 : 0}
      />
    </PseudoBox>
  )

  return href?.toString().indexOf('http') !== -1 ? (
    <a target='_blank' href={href.toString()}>
      {innerLink}
    </a>
  ) : (
    <Link href={href}>{innerLink}</Link>
  )
}

export default NavLink
