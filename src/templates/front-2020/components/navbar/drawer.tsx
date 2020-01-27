import React, { useRef } from 'react'

import { FaBars } from 'react-icons/fa'

import {
  Box,
  Divider,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from '@chakra-ui/core'

import { IDrawerProps } from '../../@types/IDrawerProps'

const Drawer: React.FC<IDrawerProps> = props => {
  const { items } = props

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <React.Fragment>
      <Box display={['block', 'block', 'none']} p={4}>
        <IconButton
          aria-label='Menu'
          icon={FaBars}
          size='lg'
          onClick={onOpen}
        />
      </Box>
      <ChakraDrawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Heading size='2xl' pt={10}>
              Menu
            </Heading>
            <Box pt={4}>
              {items.map((item, i) => {
                return (
                  <Box key={`drawer-item-${i}`}>
                    {i !== 0 ? <Divider /> : null}
                    <Box py={1}>
                      <Link
                        href={`${item.href}`}
                        onClick={() =>
                          document
                            .querySelector(item.href.toString())
                            .scrollIntoView({ behavior: 'smooth' })
                        }
                        _hover={{ textDecoration: 'none' }}>
                        <Text
                          fontSize='sm'
                          color='gray.500'
                          py={1}
                          onClick={onClose}>
                          {item.text}
                        </Text>
                      </Link>
                    </Box>
                  </Box>
                )
              })}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </React.Fragment>
  )
}

export default Drawer
