import {
  combineReducers, createStore
} from 'redux';
import reducer from './reducers/index'
import modal from './reducers/modalReducer'

const applicationReducers = {
  apts: reducer,
  modal: modal
}
const rootReducer = combineReducers(applicationReducers);
const store = createStore(rootReducer);
console.log("IN CREATE STORE", store.getState());

export default store;
