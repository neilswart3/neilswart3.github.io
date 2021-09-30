import React from 'react'
import { FrameLines } from '@arwes/core'
import NavItem from './NavItem'
import Styled from './styles'

interface NavItems {
  [key: string]: {
    title: string
  }
}

const navItems: NavItems = {
  about: {
    title: 'About',
  },
  skills: {
    title: 'Skills',
  },
  projects: {
    title: 'Projects',
  },
  contact: {
    title: 'Contact',
  },
}

const delay = 200

const Header: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.Title>
        <FrameLines>
          <Styled.Text as='h2'>neilswart3</Styled.Text>
        </FrameLines>
      </Styled.Title>
      <Styled.NavItems>
        {Object.entries(navItems).map(([key, { title }], i) => (
          <NavItem href={`/${key}`} delay={delay * (i + 1)}>
            {title}
          </NavItem>
        ))}
      </Styled.NavItems>
    </Styled.Header>
  )
}

export default Header
