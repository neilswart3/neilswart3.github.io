import React from 'react'
import { AnimatorGeneralProvider } from '@arwes/animation'
import { Text } from '@arwes/core'
import Styled from './styles'

interface NavItemProps {
  href: string
  delay: number
  children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const { delay, children } = props

  return (
    <AnimatorGeneralProvider animator={{ duration: { enter: 200, delay } }}>
      <Styled.NavButton>
        <Text>{children}</Text>
      </Styled.NavButton>
    </AnimatorGeneralProvider>
  )
}

export default NavItem
