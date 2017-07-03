import styled from 'styled-components'
import { Box } from 'grid-styled'

export const ModalContainer = styled.div`
  background-color: #27191e;
  border: 1px solid #000000;
  z-index: 9000;
  display: flex;
  color: #c1c77d;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
`

export const Trophy = styled.img`
  width: 96px;
`

export const LevelContainer = styled(Box)`
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  display: flex;
`

export const LevelText = styled.div`
  font-size: 1.5em;
  text-transform: uppercase;
`

export const NextButton = styled.div`
  background: #689f38;
  color: #fff;
  border: 0;
  border-radius: 2px;
  padding: 0.3rem 0.9rem;
  margin: 0.3rem 0.5rem;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;
`

export const Text = styled.div`
  color: #4caf95;
`