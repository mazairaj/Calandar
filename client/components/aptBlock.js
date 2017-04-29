import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import * as actions from '../actions/index';

const AptBlock = React.createClass({
  handleClick(day, index) {
    var state = this.props.store.default.getState();
    if (state.apts.cal[day][index].selected) {
      this.props.store.default.dispatch(actions.selectSlot( day, index, "Available Slot", "No Attendee", "No Attendee"))
    } else {
      this.props.store.default.dispatch(actions.selectDay( day, index))
      this.props.store.default.dispatch(actions.modalToggle())
    }
  },

  render() {
    const { store , event , day, index} = this.props
    var col = event.selected ? '#F08080' : '#90EE90' //Color = green if not selected and red if selected
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
