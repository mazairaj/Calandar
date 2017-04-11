// Note: You probably do not need to modify this file. Take a look at
// components/app.js.

var React = require('react');
import App from './components/app'
import { Provider } from 'react-redux';
var ReactDOM = require('react-dom')
var store = require('./store')

function render() {
  ReactDOM.render(
      <App store = {store}/>,
    document.getElementById('root')
  );
}
 render()

 store.default.subscribe(render)
