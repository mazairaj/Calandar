import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import * as actions from '../actions/index';

class EnterInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      name: "",
      phoneNum: ""
    }
  }
  close() {
    const {store} = this.props
    store.default.dispatch(actions.modalToggle())
  }
  onChange(evt){
    this.setState({[evt.target.name]: evt.target.value});
    console.log(this.state)
  }
  createEvent(){
    console.log(this.state)
    const {store} = this.props
    var state = store.default.getState();
    var day = state.apts.day;
    var index = state.apts.index;
    this.props.store.default.dispatch(actions.selectSlot( day, index, this.state.title, this.state.name, this.state.phoneNum))
    this.props.store.default.dispatch(actions.modalToggle())
  }
  render() {
    console.log("MODAL", this.props)
    const {store} = this.props
    var state = store.default.getState()
    console.log(state.apts.modal)
    return (
      <div>
        <Modal show={state.apts.modal}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form>
            <label>
              Event Title:
              <input type="text" name="title" onChange = {this.onChange.bind(this)}/>
            </label>
            <label>
              Name:
              <input type="text" name="name" onChange = {this.onChange.bind(this)}/>
            </label>
            <label>
              Phone Number:
              <input type="text" name="phoneNum" onChange = {this.onChange.bind(this)}/>
            </label>
          </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>Close</Button>
            <Button bsStyle="primary" onClick ={(this.createEvent.bind(this))}>Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default EnterInfo;
