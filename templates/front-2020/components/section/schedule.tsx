import React from 'react'

import {
  AspectRatioBox,
  Box,
  Flex,
  Heading,
  Image,
  PseudoBox,
  Text,
} from '@chakra-ui/core'
import { css } from '@emotion/core'
import { theme } from '../../theme'

export const Schedule: React.FC = props => {
  const schedule = {
    active: 'regis',
    data: [
      {
        key: 'regis',
        title: 'รับสมัคร',
        date: '28 มกราคม - 28 กุมภาพันธ์',
      },
      {
        key: 'announce',
        title: 'ประกาศผล',
        date: '7 มีนาคม',
      },
      {
        key: 'verify',
        title: 'ยืนยันสิทธิ์',
        date: '10 มีนาคม',
      },
      {
        key: 'camp',
        title: 'วันค่าย',
        date: '20 มีนาคม - 23 มีนาคม',
      },
    ],
  }

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='schedule'>
      <Box width={[22 / 24, 18 / 24]}>
        <Heading textAlign='center' size='2xl' pb={10}>
          ระยะเวลา
        </Heading>
        <Flex flexWrap='wrap' alignItems='center'>
          {schedule.data.map(item => {
            return (
              <Box
                width={[1 / 2, 1 / 2, 1 / 4]}
                p={item.key === schedule.active ? 0 : 6}
                key={`schedule-${item.key}`}>
                <Box
                  bg='white'
                  p={6}
                  borderRadius={20}
                  boxShadow={
                    item.key === schedule.active
                      ? theme.shadow['2xl']
                      : theme.shadow.lg
                  }>
                  <AspectRatioBox ratio={1 / 1}>
                    <Image
                      src='https://storage.rayriffy.com/files/image/72982525_p0.jpg'
                      rounded='full'
                      objectFit='cover'
                      css={css`
                        filter: grayscale(
                          ${item.key !== schedule.active ? `100` : `0`}%
                        );
                      `}
                    />
                  </AspectRatioBox>
                  <Heading
                    textAlign='center'
                    fontSize={['lg', 'lg', 'xl']}
                    pt={6}>
                    {item.title}
                  </Heading>
                  <Text textAlign='center'>{item.date}</Text>
                </Box>
              </Box>
            )
          })}
        </Flex>
      </Box>
    </Flex>
  )
}
