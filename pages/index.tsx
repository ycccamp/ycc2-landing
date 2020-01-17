import React from 'react'

import ComingSoon from '../templates/coming-soon/components'
import Front2020 from '../templates/front-2020/components'

import { usePreview } from '../core/services/usePreview'

const IndexPage: React.FC = () => {
  const mode = usePreview()

  return (
    <React.Fragment>
      {mode === 0 ? <ComingSoon /> : mode === 1 ? <Front2020 /> : null}
    </React.Fragment>
  )
}

export default IndexPage
