import React from 'react'
import { Footer, Header } from 'src/components'
import Styled from './styles'

interface GeneralLayoutProps {
  children: React.ReactNode
}

const GeneralLayout: React.FC<GeneralLayoutProps> = (
  props: GeneralLayoutProps
) => {
  const { children } = props

  return (
    <Styled.GeneralLayout>
      <Header />
      <Styled.LayoutContent>
        <Styled.Main>{children}</Styled.Main>
      </Styled.LayoutContent>
      <Footer />
    </Styled.GeneralLayout>
  )
}

export default GeneralLayout
