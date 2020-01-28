import React, { useContext } from 'react'

import Img from 'gatsby-image'

import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  PseudoBox,
  useDisclosure,
} from '@chakra-ui/core'
import { theme } from '../../../theme'

import { Fluid } from '../../../../../pages'

import { ITrackProps } from '../../../@types/ITrackProps'

export const Track: React.FC<ITrackProps> = props => {
  const { track } = props

  const context = useContext(Fluid)

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <React.Fragment>
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
          onClick={onOpen}
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
      <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={12} overflow='hidden'>
          <ModalCloseButton />

          <Flex flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap']}>
            <Box
              height='100%'
              width='100%'
              maxWidth={['100%', '400px', '400px', '400px']}
              objectFit='cover'>
              <Img fluid={context.track[track.key]} />
            </Box>
            <Box>
              <ModalBody>
                <Heading pt={6} pb={2}>
                  {track.name}
                </Heading>
                <p>{track.desc}</p>
              </ModalBody>

              <ModalFooter>
                <Flex pt={[2, 6, 6, 8]}>
                  <Button variant='ghost' mr={3} onClick={onClose}>
                    ปิด
                  </Button>
                  <Button variantColor='flory' isDisabled={true}>
                    เปิดรับสมัครวันที่ 28
                  </Button>
                </Flex>
              </ModalFooter>
            </Box>
          </Flex>
        </ModalContent>
      </Modal>
    </React.Fragment>
  )
}
