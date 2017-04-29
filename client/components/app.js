// Entry point for your React app.

var React  = require('react');
const { PropTypes } = require('react');
import Calandar from './Calandar';
import { connect } from 'react-redux';


const App = React.createClass({

  render() {
    console.log("Inside App", this)
    return (
      <div>
        <h1>Redux Calandar</h1>
          <div style={{display: 'flex'}}>
            <Calandar store = {this.props.store}/>
          </div>
      </div>
    );
  }
});


export default App
