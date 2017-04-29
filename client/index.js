
var React = require('react');
import App from './components/app'
import { Provider } from 'react-redux';
var ReactDOM = require('react-dom')
var store = require('./store')

function render() {
  return (
    ReactDOM.render(
      <App store={store}/>,
      document.getElementById('root')
    )
  )
}
 render()

 store.default.subscribe(render)
