import React, { useRef } from 'react'

import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalContent,
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

interface ICamperResult {
  [key: string]: {
    id: number
    name: string
    price?: number
  }[]
}

export const Announcement: React.FC = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const campersResult: ICamperResult = {
    developer: {
      primary: [
        {
          id: 1,
          name: 'สมชาย รักชาติ',
          price: 300.01,
        },
      ],
      secondary: [
        {
          id: 1,
          name: 'สมชาย รักชาติ',
          price: 300.01,
        },
      ],
    },
  }

  const upperFirst = (str: string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : ''
  }

  return (
    <React.Fragment>
      <Button px={[12, 12, 20]} size='lg' variantColor='flory' onClick={onOpen}>
        <Text>ประกาศรายชื่อผู้เข้ารอบ</Text>
      </Button>

      <SlideIn in={isOpen} items={[isOpen]}>
        {(styles: any) => {
          const modal = (
            <Modal
              isOpen={true}
              isCentered={true}
              size='2xl'
              onClose={onClose}
              finalFocusRef={btnRef}>
              <ModalOverlay opacity={styles.opacity} />
              <ModalContent
                p={6}
                borderRadius={12}
                overflow='hidden'
                {...styles}>
                <Heading size='lg'>รายชื่อผู้เข้ารอบ</Heading>
                <Tabs variant='soft-rounded'>
                  <TabList py={4}>
                    {Object.entries(campersResult).map(([key]) => (
                      <Tab key={`tab-head-${key}`}>{upperFirst(key)}</Tab>
                    ))}
                  </TabList>
                  <TabPanels>
                    {Object.entries(campersResult).map(([key, val]) => (
                      <TabPanel key={`tab-panel-${key}`}>
                        <Flex justify='space-between'>
                          <Heading size='sm'>รหัสน้องค่าย</Heading>
                          <Heading size='sm'>ชื่อ - นามสกุล</Heading>
                          <Heading size='sm'>เงินมัดจำ</Heading>
                        </Flex>
                        {val.map((camper, i) => (
                          <Flex
                            justify='space-between'
                            key={`tab-panel-${key}-${i}`}>
                            <Text>{camper.id}</Text>
                            <Text>{camper.name}</Text>
                            <Text>{camper.price}</Text>
                          </Flex>
                        ))}
                      </TabPanel>
                    ))}
                  </TabPanels>
                </Tabs>
              </ModalContent>
            </Modal>
          ) as any

          return modal
        }}
      </SlideIn>
    </React.Fragment>
  )
}
