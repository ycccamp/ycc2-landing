import React, { useContext } from 'react'

import Img from 'gatsby-image'

import {
  AspectRatioBox,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  PseudoBox,
  SlideIn,
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
      <SlideIn in={isOpen} items={[isOpen]}>
        {(styles: any) => {
          const modal = (
            <Modal isOpen={true} size='2xl' onClose={onClose}>
              <ModalOverlay opacity={styles.opacity} />
              <ModalContent borderRadius={12} overflow='hidden' {...styles}>
                <Flex
                  flexWrap={['wrap', 'nowrap', 'nowrap', 'nowrap']}
                  alignItems='center'>
                  <Box
                    height='100%'
                    width='100%'
                    maxWidth={['100%', '400px', '400px', '350px']}
                    objectFit='cover'>
                    <Box display={['none', 'block', 'block', 'block']}>
                      <Img fluid={context.track[track.key]} />
                    </Box>
                    <AspectRatioBox
                      ratio={1 / 1}
                      display={['block', 'none', 'none', 'none']}>
                      <Box overflow='hidden'>
                        <Img fluid={context.track[track.key]} />
                      </Box>
                    </AspectRatioBox>
                  </Box>
                  <Box>
                    <ModalBody>
                      <Heading pt={4} pb={2}>
                        {track.name}
                      </Heading>
                      <p>{track.desc}</p>
                    </ModalBody>

                    <ModalFooter>
                      <Flex pt={[2, 4, 6, 6]}>
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
          ) as any

          return modal
        }}
      </SlideIn>
    </React.Fragment>
  )
}
