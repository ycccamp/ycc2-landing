import { useEffect, useState } from 'react'

import fetch from 'isomorphic-unfetch'

import { ICounter } from '../@types/ICounter'

export const useCounter = () => {
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<ICounter | null>()

  useEffect(() => {
    fetch('https://asia-east2-ycc2020.cloudfunctions.net/counter')
      .then(async raw => {
        const res = (await raw.json()) as ICounter
        setData(res)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, error, loading }
}
