import { useRouter } from 'next/router'

export const usePreview = (): number => {
  const { query } = useRouter()
  const preview = query.preview as string

  return Number.isSafeInteger(Number(preview)) ? Number(preview) : 0
}
