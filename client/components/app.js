// Entry point for your React app.

var React  = require('react');
const { PropTypes } = require('react');
import Calandar from './Calandar';
import { connect } from 'react-redux';


const App = React.createClass({
  // This is just a placeholder, replace with your code!

  // React's prop types give us a nice way to validate all of the data that
  // comes into our components via props. See
  // https://facebook.github.io/react/docs/reusable-components.html#prop-validation.

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
