var React = require('react');
import AptBlock from './aptBlock';

const Day = React.createClass({
  // This is just a placeholder, replace with your code!

  // React's prop types give us a nice way to validate all of the data that
  // comes into our components via props. See
  // https://facebook.github.io/react/docs/reusable-components.html#prop-validation.
  // propTypes: {
  //   title: React.PropTypes.string,
  //   onClick: React.PropTypes.func
  // },
  displayEvents() {
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
