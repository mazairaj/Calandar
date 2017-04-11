import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import * as actions from '../actions/index';
import EnterInfo from './modal'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

const AptBlock = React.createClass({
  handleClick(day, index) {
    console.log('The link was clicked.', this.props.store.default.getState());
    this.props.store.default.dispatch(actions.selectSlot( day, index))
  },
  // displayColor() {
  //   return this.state.clicked ? '#F08080' : '#90EE90'
  // },
  render() {
    const { store , event , day, index} = this.props
    var col = event.selected ? '#F08080' : '#90EE90'
    return (
      <div onClick={this.handleClick.bind(this, day, index)}>
        <Card block inverse style={{ backgroundColor: col, borderColor: '#333' }}>
          <CardTitle>{event.name}</CardTitle>
          <CardText>{event.selected ? event.atendee + ": " + event.phoneNum : "Sign Up!"}</CardText>
        </Card>
      </div>)
    }
  });
  export default AptBlock;
