import { keyframes } from 'styled-components'
import styled from 'styled-components'
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
    transform: translateX(10%);
  }
  to {
    background-position: 0 31.034483%;
  }
`

export const zombieAttack = keyframes`
  from {
    background-position: 0 35.294118%;
     transform: translateX(-50%);
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

export const HorizontalSeparator = styled.div`
  height: 10px;
  width: 100%;
  background-color: #343436;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(0,0,0,0.4);
`

export const VerticalSeparator = styled.div`
  width: 10px;
  height: 100%;
  background-color: #343436;
  border-left: 1px solid rgba(255,255,255,0.1);
  border-right: 1px solid rgba(0,0,0,0.4);
`

export const CharacterWrap = styled.div`
  position: absolute;
  bottom: 6.9em;
  z-index: 1000;
`

export const HealthContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #000;
  font-size: 1.8em;
  font-weight: bold;
`
export const HeartImg = styled.img`
  width: 2rem;
`

export const HealthText = styled.span`
  margin-top: -0.8rem;
  margin-left: 6px;
  top: 50%;
  position: absolute;
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

export const WarriorWalking = styled(Warrior)`
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

export const BoxHeading = styled.div`
  text-transform: uppercase;
  background: #1A1C1D;
  color: #ccc;
  white-space: nowrap;
  position: relative;
  padding: 5px;
  font-family: "Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif;
  font-weight: bold;
  margin: 0;
  font-size: 1.3em;
  border-bottom: 1px solid rgba(255,255,255,0.05);
`

export const LevelSpan = styled.span`
  font-size: 1.7em;
  color: #c5c55b;
  font-weight: 700;
  text-transform: uppercase;
`