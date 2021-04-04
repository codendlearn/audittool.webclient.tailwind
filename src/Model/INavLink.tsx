import { ReactNode } from 'react'

export default interface INavLink {
  text: string
  path?: string
  active?: boolean
  iconName?: string
  subMenu?: INavLink[]
}
