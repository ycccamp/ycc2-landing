import React, {
  ReactText,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

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
  ModalContent,
  ModalFooter,
  ModalOverlay,
  PseudoBox,
  SlideIn,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
} from '@chakra-ui/core'
import { theme } from '../../../theme'

import 'firebase/analytics'
import { firebase } from '../../../../../core/services/firebase'

import { Fluid } from '../../../../../pages'

import { ITrackProps } from '../../../@types/ITrackProps'

export const Track: React.FC<ITrackProps> = props => {
  const { track, counter } = props

  const context = useContext(Fluid)
  const [count, setCount] = useState<ReactText>('--')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const cardRef = useRef(null)

  useEffect(() => {
    if (counter.error) {
      setCount('-1')
    } else {
      if (!counter.loading && counter.data !== null) {
        const filteredData = counter.data.data.filter(
          o => o.track === track.key
        )[0]

        setCount(filteredData.amount)
      }
    }
  }, [counter])

  useEffect(() => {
    if (isOpen === true) {
      const instance = firebase()
      instance.analytics().logEvent('click-track', {
        track: track.key,
      })
    }
  }, [isOpen])

  return (
    <React.Fragment>
      <Box
        p={4}
        key={`join-${track.key}`}
        width={['100%', 1 / 2, 1 / 2, 1 / 3]}>
        <PseudoBox
          bg='white'
          ref={cardRef}
          overflow='hidden'
          borderRadius={20}
          cursor='pointer'
          transition='200ms'
          position='relative'
          transition-timing-function='ease-out'
          transform='perspective(250px) translateZ(0px)'
          boxShadow={theme.shadow.lg}
          onClick={onOpen}
          _hover={{
            transform: isOpen
              ? 'perspective(250px) translateZ(0px)'
              : 'perspective(250px) translateZ(10px)',
            boxShadow: theme.shadow['2xl'],
          }}>
          <Flex pt={6} px={5} alignItems='center'>
            <Heading size='md'>{track.name}</Heading>
            <Box mx='auto' />
            <Stat textAlign='right'>
              <StatLabel>ลงทะเบียนแล้ว</StatLabel>
              <StatNumber fontSize='xl'>{count} คน</StatNumber>
            </Stat>
          </Flex>
          <Box pt={8}>
            <AspectRatioBox ratio={3 / 4}>
              <Box objectFit='cover'>
                <Img fluid={context.track[track.key]} />
              </Box>
            </AspectRatioBox>
          </Box>
          <Flex
            position='absolute'
            zIndex={1}
            bg='flory.500'
            minWidth={1 / 3}
            height='40px'
            justifyContent='center'
            alignItems='center'
            borderRadius='0 20px 0 0'
            color='flory.500'
            left={0}
            bottom={0}>
            <Text fontSize='lg' color='white' px={5}>
              เลือกสาขานี้
            </Text>
          </Flex>
        </PseudoBox>
      </Box>
      <SlideIn in={isOpen} items={[isOpen]}>
        {(styles: any) => {
          const modal = (
            <Modal
              isOpen={true}
              isCentered={true}
              size='2xl'
              onClose={onClose}
              initialFocusRef={cardRef}>
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
                      <Box py={4}>
                        <Stat textAlign='left'>
                          <StatLabel>ลงทะเบียนแล้ว</StatLabel>
                          <StatNumber fontSize='xl'>{count} คน</StatNumber>
                        </Stat>
                      </Box>
                    </ModalBody>

                    <ModalFooter>
                      <Flex justifyContent='flex-end' width='100%'>
                        <Button variant='ghost' mr={3} onClick={onClose}>
                          ปิด
                        </Button>
                        <Link
                          href='https://join.ycc.in.th'
                          isExternal
                          width={1 / 2}
                          _hover={{ textDecoration: 'none' }}>
                          <Button variantColor='flory' width='100%'>
                            สมัครสาขานี้
                          </Button>
                        </Link>
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

export default Track
