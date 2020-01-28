import React from 'react'

import { Box, Flex, Heading } from '@chakra-ui/core'

import { Track } from './track'

export const Join: React.FC = props => {
  const tracks = [
    {
      key: 'programming',
      name: 'Programming',
      desc:
        'ผู้รังสรรค์และถ่ายทอดความคิดผ่านการเขียนโปรแกรมให้ออกมาสู่การใช้งานจริง',
    },
    {
      key: 'design',
      name: 'Design',
      desc:
        'ผู้ออกแบบที่เต็มเปี่ยมไปด้วยความคิดสร้างสรรค์ รักความสวยงาม และมีเอกลักษณ์',
    },
    {
      key: 'creative',
      name: 'Creative',
      desc: 'ผู้รักในการใช้ภาษาและการสื่อสาร สร้างตัวตนที่สื่อความหมายออกมาได้',
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
