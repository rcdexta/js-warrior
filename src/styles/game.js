import styled from 'styled-components'
import { keyframes } from 'styled-components'

export const stand = keyframes`
  from {
    background-position: 0 68.965517%;
  }
  to {
    background-position: 0 100%;
  }
`

export const Canvas = styled.div`
  height: 35em;
  max-height: 35em;
  width: 100%;
  min-width: 768px;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: auto;
  background-image: url(https://dl.dropbox.com/s/96krfjyfy1vjjho/back.jpg);
  background-repeat-y: no-repeat;
  background-size: contain;
`

export const CharacterWrap = styled.div`
  position: absolute;
  bottom: 7em;
  z-index: 1000;
`

export const Character = styled.div`
  max-width: 100%; 
  background-size: 180.689655%;
  width: 75px;
  height: 125px;
  background-image: url(https://dl.dropbox.com/s/17iaqkidi3chfbr/sprite_resp.png);
  background-repeat: no-repeat;
  animation: ${stand} .8s steps(9) infinite;
`

export const ExitPostDiv = styled.div`
  z-index: 10;
  background-image: url(https://dl.dropbox.com/s/pdfqdti5a7gmiy0/exit.png);
  background-repeat: no-repeat;
  position: absolute;
  bottom: 7em;
  width: 128px;
  height: 103px;
`

export const FloorDiv = styled.div`
    position: absolute;
    bottom: 0px;
    height: 20%;
    width: 100%;
    flex-direction: row;
    display: flex;
`

export const TileDiv = styled.div`
  background-image: url(https://dl.dropbox.com/s/hpfi20lhjl1qx8w/Tile.png);
  background-repeat: no-repeat;
  width: 11%;
  height: auto;
  display: flex;
  background-size: inherit;
  justify-content: center;
`