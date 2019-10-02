import React from 'react'

import { Flex, Box, Image, Text } from 'rebass'
import styled from 'styled-components'

const FullHeightFlex = styled(Flex)`
  height: 100% !important;
`

const ComingSoonComponent: React.FC = () => {
  return (
    <FullHeightFlex justifyContent={`center`} alignItems={`center`}>
      <Box>
        <Flex justifyContent={`center`}>
          <Box width={[14 / 24, 12 / 24, 10 / 24, 8 / 24]}>
            <Image src={`/static/images/ycclogo.png`} />
          </Box>
        </Flex>
        <Box px={3} py={2}>
          <Text textAlign={`center`} fontWeight={100} fontSize={52}>Young Creator's Camp</Text>
          <Text textAlign={`center`} fontSize={28} pt={3}>ค่ายเปลี่ยนวัยมันส์เป็น “นักสร้างสรรค์” กำลังจะกลับมาเร็วๆ นี้</Text>
        </Box>
      </Box>
    </FullHeightFlex>
  )
}

export default ComingSoonComponent
