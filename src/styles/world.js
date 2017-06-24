import styled from 'styled-components'
import { keyframes } from 'styled-components'
import BackImg from '../images/back.jpg'
import ExitImg from '../images/exit.png'
import TileImg from '../images/Tile.png'
import WarriorSprite from '../images/warrior_sprite.png'
import ZombieSprite from '../images/zombie_sprite.png'

export const warriorStand = keyframes`
  from {
    background-position: 0 68.965517%;
  }
  to {
    background-position: 0 100%;
  }
`

export const zombieStand = keyframes`
  from {
    background-position: 0 58.823529%;
  }
  to {
    background-position: 0 100%;
  }
`

export const warriorWalk = keyframes`
  from {
    background-position: 0 34.482759%;
  }
  to {
    background-position: 0 65.517241%; 
  }
`

export const warriorAttack = keyframes`
  from {
    background-position: 0 0%;
  }
  to {
    background-position: 0 31.034483%; 
  }
`

export const zombieAttack = keyframes`
  from {
    background-position: 0 35.294118%; 
  }
  to {
    background-position: 0 55.882353%; 
  }
`

export const WorldContainer = styled.div`
  height: 35em;
  max-height: 35em;
  width: 100%;
  min-width: 768px;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: auto;
  background-image: url(${BackImg});
  background-repeat-y: no-repeat;
  background-size: contain;
`

export const Progress = styled.div`
 height: 10px;
 background-color: black;
`

export const CharacterWrap = styled.div`
  position: absolute;
  bottom: 6.9em;
  z-index: 1000;
`

export const Warrior = styled.div`
  max-width: 100%;
  height: 125px;
  background-image: url(${WarriorSprite});
  background-repeat: no-repeat;
  margin-left: 40%;
`

export const Zombie = styled.div`
  max-width: 100%;
  height: 125px;
  background-image: url(${ZombieSprite});
  background-repeat: no-repeat;
  margin-left: 10%;
`

export const WarriorIdle = styled(Warrior)`
  background-size: 180.689655%;
  width: 75px;
  animation: ${warriorStand} .8s steps(9) infinite;
`

export const ZombieIdle = styled(Zombie)`
  background-size: 145.37037%; ;
  width: 108px;
  animation: ${zombieStand} .8s steps(14) infinite;
`

export const warriorWalking = styled(Warrior)`
  background-size: 139.689655%;
  width: 94px;
  animation: ${warriorWalk} .8s steps(9) infinite;
`

export const WarriorAttack = styled(Warrior)`
  background-size: 100%;
  width: 136px;
  animation: ${warriorAttack} .8s steps(9) infinite;
`

export const ZombieAttack = styled(Zombie)`
  background-size: 145.37037%;
  width: 111px;
  animation: ${zombieAttack} .8s steps(7) infinite;
`

export const ExitPostDiv = styled.div`
  z-index: 10;
  background-image: url(${ExitImg});
  background-repeat: no-repeat;
  position: absolute;
  bottom: 7em;
  width: 128px;
  height: 103px;
`

export const FloorDiv = styled.div`
    position: absolute;
    bottom: -1px;
    height: 20%;
    width: 100%;
    flex-direction: row;
    display: flex;
`

export const TileDiv = styled.div`
  background-image: url(${TileImg});
  background-repeat: no-repeat;
  width: 12%;
  height: auto;
  display: flex;
  background-size: cover;
  margin-bottom: 1px;
`

export const LogoImg = styled.img`
  height: 42px;
  width: auto;
  margin-left: 2%;
`