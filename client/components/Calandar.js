import React from 'react';
import Day from './Day';
import EnterInfo from './modal';
var _ = require('underscore')

const overlay = {
  position: 'absolute',
  width: 300,
  height: 200,
  backgroundColor: 'rgba(255, 255, 255, 0.75)'
};
const Calandar = React.createClass({

  componentDidMount() {
    console.log("I AM A CALANDAR BITCH!");
  },
  populateDays(){
    //Make the Days appear from Monday to Friday
    const {store} = this.props
    console.log("PROPS", this.props.store.default.getState());
    return (<div style = {{width: '100%', height: '600px', border: '2px solid black',
    display: 'flex', flexDirection: 'row', alignItems: 'stretch', flex: '5'}}>
    {_.map(this.props.store.default.getState().apts.cal, function(value, key){
      return (<Day store={store} day={key} />) })}</div>)
  },
  render() {
    const{store} = this.props
    return (
      <div>
      {this.populateDays()}
      <EnterInfo store= {store} style ={overlay}/>
      </div>
    )
  }
});

export default Calandar;
