var React = require('react');
import AptBlock from './aptBlock';

const Day = React.createClass({

  displayEvents() {
    //Display Events for Day
    const {store, day } = this.props
    var state = store.default.getState().apts.cal[day]
    return <div>{state.map(function(evt, index){
      return <AptBlock store = {store} event= { evt } day = {day} index = {index}/>
    })}</div>
  },
  render() {
    return (
      <div>
        <div style={{border: '2px solid black', height:'600px', width: '235px'}}>
          <h3 style = {{textAlign: 'center'}} >{this.props.day}</h3>
          {this.displayEvents()}
        </div>
      </div>
    );
  }
});

export default Day;
