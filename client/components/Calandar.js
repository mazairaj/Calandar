import React from 'react';
import Day from './Day';
var _ = require('underscore');
import EnterInfo from './modal'
const Calandar = React.createClass({
  // This is just a placeholder, replace with your code!

  // React's prop types give us a nice way to validate all of the data that
  // comes into our components via props. See
  // https://facebook.github.io/react/docs/reusable-components.html#prop-validation.
  // propTypes: {
  //   title: React.PropTypes.string,
  //   onClick: React.PropTypes.func
  // },
  componentDidMount() {
    console.log("I AM A CALANDAR BITCH!");
  },
  populateDays(){
    const {store} = this.props
    console.log("PROPS", this.props.store.default.getState());
    return (<div style = {{width: '100%', height: '600px', border: '2px solid black',
    display: 'flex', flexDirection: 'row', alignItems: 'stretch', flex: '5'}}>
    {_.map(this.props.store.default.getState().apts.cal, function(value, key){
      return (<Day store={store} day={key} />) })}</div>)
  },
  render() {
    const{store} = this.props
    return (<div>
      {store.default.getState().apts.modal ? <EnterInfo/> : null}
      {this.populateDays()}</div>
  )
  }
});

export default Calandar;
