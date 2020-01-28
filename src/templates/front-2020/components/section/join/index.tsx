import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

import { Track } from './track'

export const Join: React.FC = props => {
  const tracks = [
    {
      key: 'programming',
      name: 'Programming',
      desc:
        'ผู้รังสรรค์และถ่ายทอดความคิดจินตนาการผ่านการเขียนโปรแกรมให้ออกมาสู่การใช้งานจริง',
    },
    {
      key: 'design',
      name: 'Design',
      desc:
        'ผู้ออกแบบที่เต็มไปด้วยความคิดสร้างสรรค์ รักความสวยงาม และมีเอกลักษณ์ในตัวเอง',
    },
    {
      key: 'creative',
      name: 'Creative',
      desc:
        'ผู้สร้างเรื่องราวให้กับโปรดักต์ และถ่ายทอดคุณค่าออกมาให้โลกได้เห็น',
    },
  ]

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
            <Track key={`track-${track.key}`} track={track} />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
