import {
  combineReducers, createStore
} from 'redux';
import reducer from './reducers/index'

const applicationReducers = {
  apts: reducer //the only reducer due to simplicity of app
}
const rootReducer = combineReducers(applicationReducers);
const store = createStore(rootReducer);

export default store;
