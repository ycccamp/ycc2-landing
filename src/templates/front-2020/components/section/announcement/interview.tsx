import React, { useRef } from 'react'

import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SlideIn,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from '@chakra-ui/core'

import { interviewList } from '../../../constants/interviewList'

export const AnnouncementInterview: React.FC = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const upperFirst = (str: string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
  }

  return (
    <React.Fragment>
      <Button px={[12, 12, 20]} size='lg' variantColor='flory' onClick={onOpen}>
        <Text>ดูรายชื่อผู้มีสิทธิ์สัมภาษณ์</Text>
      </Button>

      <SlideIn in={isOpen} items={[isOpen]}>
        {(styles: any) => {
          const modal = (
            <Modal
              isOpen={true}
              isCentered={true}
              size='xl'
              onClose={onClose}
              finalFocusRef={btnRef}>
              <ModalOverlay opacity={styles.opacity} />
              <ModalContent borderRadius={12} overflow='hidden' {...styles}>
                <ModalHeader>รายชื่อผู้มีสิทธิ์สัมภาษณ์</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                  style={{
                    overflow: 'scroll',
                    maxHeight: 'calc(90vh - 134px)',
                  }}>
                  <Tabs variant='soft-rounded'>
                    <TabList pb={4}>
                      {Object.entries(interviewList).map(([key]) => (
                        <Tab key={`tab-head-${key}`}>{upperFirst(key)}</Tab>
                      ))}
                    </TabList>
                    <TabPanels>
                      {Object.entries(interviewList).map(([key, val]) => (
                        <TabPanel key={`tab-panel-${key}`}>
                          <Flex pb={2}>
                            <Heading size='sm' width={1 / 2} textAlign='center'>
                              รหัสน้องค่าย
                            </Heading>
                            <Heading size='sm' width={1 / 2} textAlign='center'>
                              ชื่อ - นามสกุล
                            </Heading>
                          </Flex>
                          {val.map((camper, i) => (
                            <Flex key={`tab-panel-${key}-${i}`}>
                              <Text width={1 / 2} textAlign='center'>
                                {key.slice(0, 3).toUpperCase()}
                                {camper.id}
                              </Text>
                              <Text width={1 / 2} textAlign='center'>
                                {camper.name}
                              </Text>
                            </Flex>
                          ))}
                        </TabPanel>
                      ))}
                    </TabPanels>
                  </Tabs>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>ปิด</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          ) as any

          return modal
        }}
      </SlideIn>
    </React.Fragment>
  )
}
