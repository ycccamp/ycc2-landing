import { LinkProps } from 'next/link'
import { ReactText } from 'react'

export interface INavbarLinkProps {
  text: ReactText
  href: LinkProps['href']
}
