import styled from 'styled-components'

export const RelativeDiv = styled.div`
  position: relative;
`

export const SubmitButton = styled.div`
  position: absolute;
  text-align: center;
  width: 30px;
  right: 0px;
  z-index: 1000;
  display: inline-block;
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

export const StopButton = styled.div`
  position: absolute;
  right: 140px;
  z-index: 1000;
  display: inline-block;
  background: red;
  color: #fff;
  border: 0;
  border-radius: 2px;
  padding: 0.3rem 0.9rem;
  margin: 0.3rem 0.5rem;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;
`

export const HelpButton = styled.div`
  position: absolute;
  right: 70px;
  z-index: 1000;
  display: inline-block;
  background: rgba(2, 119, 187, 0.9);
  color: #fff;
  border: 0;
  border-radius: 2px;
  padding: 0.3rem 0.9rem;
  margin: 0.3rem 0.5rem;
  text-decoration: none;
  transition: background 0.3s;
  cursor: pointer;
`