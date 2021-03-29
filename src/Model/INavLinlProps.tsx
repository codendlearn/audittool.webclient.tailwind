import { ReactNode } from 'react'

export interface INavLinlProps {
  text: string
  path: string
  component?: ReactNode
  active?: boolean
  icon?: ReactNode
}
