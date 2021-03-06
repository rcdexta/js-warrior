import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { HelpModalContainer, Text } from '../styles/modal'
import { Flex, Box } from 'grid-styled'
import HelpImg from '../images/help.png'
import { RespTable } from '../styles/table'

class HelpModal extends Component {
  render() {
    return (
      <Modal visible={this.props.open} width="600" height="700" effect="fadeInUp" onClickAway={this.props.onClose}>
        <HelpModalContainer style={{ justifyContent: 'initial', fontSize: '1.3em' }}>
          <Flex>
            <Box p={1} width={1}>
              <Flex style={{ borderBottom: '1px solid #777' }}>
                <Box width={1/8}>
                  <img src={HelpImg} alt=""/>
                </Box>
                <Box>
                  <h2>Help</h2>
                </Box>
              </Flex>
              <h3>Turns</h3>
              <Text>
                The game is played in turns. At every turn, the playTurn method is executed to determine what action the warrior will take. It's your responsibility to define the behavior using this function.
              </Text>
              <h3>Actions</h3>
              <Text>An action is something that the warrior can do. You can perform one action per turn</Text>

              <RespTable>
                <tr>
                  <th>Method</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td data-th="Method">warrior.walk()</td>
                  <td data-th="Notes">Walks in the direction the warrior is currently facing. </td>
                </tr>
                <tr>
                  <td data-th="Method">warrior.attack()</td>
                  <td data-th="Notes">Attack one step in the direction that you're facing. An attack deals 3 points of damage.</td>
                </tr>
                <tr>
                  <td data-th="Method">warrior.rest()</td>
                  <td data-th="Notes">Gain back 3 points of health back, but do nothing more.</td>
                </tr>
              </RespTable>

              <h3>Senses</h3>
              <Text>
                A sense is something which gathers information about the floor. You can perform senses as often as you want per turn to gather information about your surroundings and to aid you in choosing the proper action.
              </Text>

              <RespTable>
                <tr>
                  <th>Method</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td data-th="Method">warrior.health()</td>
                  <td data-th="Notes">Return an integer representing your current health.</td>
                </tr>
                <tr>
                  <td data-th="Method">warrior.feel().isEnemy()</td>
                  <td data-th="Notes">Determine if an enemy unit is facing the warrior</td>
                </tr>
                <tr>
                  <td data-th="Method">warrior.feel().isEmpty()</td>
                  <td data-th="Notes">If true, this means that nothing (except maybe stairs) is at this location and you can walk here.</td>
                </tr>
              </RespTable>
            </Box>
          </Flex>
        </HelpModalContainer>
      </Modal>
    )
  }
}

HelpModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default HelpModal
