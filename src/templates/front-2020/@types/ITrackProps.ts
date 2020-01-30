import { ReactText } from 'react'

import { ICounter } from '../../../core/@types/ICounter'

export interface ITrackProps {
  track: {
    key: string
    name: string
    desc: ReactText
  }
  counter: {
    loading: boolean
    error: boolean
    data: ICounter | null
  }
}
