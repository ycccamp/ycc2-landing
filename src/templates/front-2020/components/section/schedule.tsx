import React from 'react'

import Img from 'gatsby-image'

import { AspectRatioBox, Box, Flex, Heading, Text } from '@chakra-ui/core'
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

  const generateFluid = (src: string, size: number = 300) => {
    const images = require(`../../../../../assets/image/2020/${src}?resize&sizes[]=200&sizes[]=300`)
    const webP = require(`../../../../../assets/image/2020/${src}?webp`)
    const trace = require(`../../../../../assets/image/2020/${src}?trace`).trace

    const res = {
      src: images.src,
      srcSet: images.srcSet,
      srcWebp: webP,
      tracedSVG: trace,
      aspectRatio: images.width / images.height,
      sizes: `(max-width: ${size}px) 100vw, ${size}px`,
    }

    return res
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
          {schedule.data.map((item, i) => {
            return (
              <Box
                width={['100%', 1 / 2, 1 / 2, 1 / 4]}
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
                    <Box objectFit='cover' borderRadius={999} overflow='hidden'>
                      <Img fluid={generateFluid(`schedule-${i}.png`)} />
                    </Box>
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
