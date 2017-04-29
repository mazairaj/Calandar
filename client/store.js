import {
  combineReducers, createStore
} from 'redux';
import reducer from './reducers/index'

const applicationReducers = {
  apts: reducer
}
const rootReducer = combineReducers(applicationReducers);
const store = createStore(rootReducer);
console.log("IN CREATE STORE", store.getState());

export default store;
