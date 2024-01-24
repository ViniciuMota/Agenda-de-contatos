import styled from 'styled-components'
import { EditButton } from '../../styles'

export const Aside = styled.aside`
  background-color: #d8d8d8;
  height: 100vh;
  padding: 16px;

  @media (max-width: 1024px) {
    height: auto;
    position: sticky;
    top: 0;
  }
`
export const ReturnButton = styled(EditButton)`
  margin: 128px 16px;
  padding: 16px 24px;
  background-color: #edecc0;
`
