import React, { useContext } from 'react'

import Img from 'gatsby-image'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  PseudoBox,
  useToast,
} from '@chakra-ui/core'
import { theme } from '../../theme'

import { Fluid } from '../../../../pages'

export const Join: React.FC = props => {
  const toast = useToast()

  const tracks = [
    {
      key: 'programming',
      name: 'Programming',
    },
    {
      key: 'design',
      name: 'Design',
    },
    {
      key: 'creative',
      name: 'Creative',
    },
  ]

  const notOpen = () => {
    toast({
      title: 'ยังไม่ถึงเวลารับสมัคร',
      description: `Young Creator's Camp จะเปิดรับสมัครในวันที่ 28 มกราคม มากดใหม่ในวันที่ 28 นะคะ`,
      status: 'warning',
      duration: 4000,
      isClosable: true,
    })
  }

  const context = useContext(Fluid)

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='join'>
      <Box width={[22 / 24, 20 / 24, 18 / 24, 16 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          เลือกสาขา
        </Heading>
        <Flex flexWrap='wrap'>
          {tracks.map(track => (
            <Box
              p={4}
              key={`join-${track.key}`}
              width={['100%', 1 / 2, 1 / 2, 1 / 3]}>
              <PseudoBox
                bg='white'
                pt={8}
                overflow='hidden'
                borderRadius={20}
                cursor='pointer'
                transition='200ms'
                transition-timing-function='ease-out'
                transform='perspective(100px) translateZ(0px)'
                boxShadow={theme.shadow.lg}
                onClick={() => notOpen()}
                _hover={{
                  transform: 'perspective(100px) translateZ(10px)',
                  boxShadow: theme.shadow['2xl'],
                }}>
                <Heading size='md' textAlign='center'>
                  {track.name}
                </Heading>
                <Box pt={8}>
                  <AspectRatioBox ratio={3 / 4}>
                    <Box objectFit='cover'>
                      <Img fluid={context.track[track.key]} />
                    </Box>
                  </AspectRatioBox>
                </Box>
              </PseudoBox>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
