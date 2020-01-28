import React from 'react'

import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/core'
import { theme } from '../../theme'

export const About: React.FC = props => {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      minHeight='100%'
      py={20}
      id='about'>
      <Box
        width={[22 / 24, 18 / 24, 14 / 24, 10 / 24]}
        bg='white'
        p={10}
        borderRadius={20}
        boxShadow={theme.shadow['2xl']}>
        <Heading textAlign='center' size='2xl' pb={5}>
          What is YCC?
        </Heading>
        <Divider />
        <Text pt={5}>
          Young Creator's Camp คือค่ายสำหรับเยาวชนผู้เห็นปัญหาของสังคม
          เริ่มที่จะตั้งคำถามกับมัน และพยายามแก้ไขด้วยความสามารถของตัวเอง
        </Text>
        <Text py={2}>
          ช่วงเวลาแห่งการเรียนรู้ ฝึกฝน และทำความเข้าใจในแก่นของ Developer,
          Designer และ Creative
          รวมทั้งขัดเกลาความสามารถให้ไปไกลมากกว่าด้วยการทำงานจริงและเทคนิคจากผู้เชี่ยวชาญในวงการ
        </Text>
        <Text>
          ถ้าอยากรู้ว่าคุณจะไปได้ไกลแค่ไหน
          และพลังของคุณจะเปลี่ยนแปลงสังคมได้มากเพียงใด ค่าย YCC
          อาจจะเป็นคำตอบที่คุณเองรอคอย
        </Text>
      </Box>
    </Flex>
  )
}
