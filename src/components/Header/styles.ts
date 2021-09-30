import { Text as ArText } from '@arwes/core'
import styled from '@emotion/styled'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`

const Title = styled.div`
  display: block;
`

const Text = styled(ArText)`
  margin: 0;
`

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
`

const Styled = { Header, Title, Text, NavItems }

export default Styled
