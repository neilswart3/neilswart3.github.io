import { FrameHexagon } from '@arwes/core'
import styled from '@emotion/styled'

const GeneralLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 96%;
  margin: 0 auto;
`

const Main = styled.main`
  width: 100%;
`

const LayoutContent = styled(FrameHexagon)`
  height: 100%;
`

const Styled = { GeneralLayout, Main, LayoutContent }

export default Styled
