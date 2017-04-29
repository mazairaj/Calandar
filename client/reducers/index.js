var Actions = require('../actions');
// var _ = require('underscore')
// var mongoose = require('mongoose');
// var Event = require('../models/event')

var emptySlot = {name: "Available Slot", atendee: "No Attendee", phoneNum: "No Attendee", description: "", selected: false}
const DEFAULT_STATE = {
  cal: {
    "Monday" : [emptySlot, emptySlot, emptySlot,  emptySlot,
                  emptySlot, emptySlot, emptySlot, emptySlot, emptySlot],
    "Tuesday": [emptySlot, emptySlot, emptySlot,  emptySlot,
                  emptySlot, emptySlot, emptySlot, emptySlot, emptySlot],
    "Wednesday" : [emptySlot, emptySlot, emptySlot,  emptySlot,
                  emptySlot, emptySlot, emptySlot, emptySlot, emptySlot],
    "Thursday": [emptySlot, emptySlot, emptySlot,  emptySlot,
                  emptySlot, emptySlot, emptySlot, emptySlot, emptySlot],
    "Friday": [emptySlot, emptySlot, emptySlot,  emptySlot,
                  emptySlot, emptySlot, emptySlot, emptySlot, emptySlot]
  },
  modal: false,
  day: null,
  index: null
}
// Note: You may have more than one redconst DEFAUL_STATE = {eReducers. See
// http://redux.js.org/docs/api/combineReducers.html and
// http://redux.js.org/docs/basics/Reducers.html for more info.

const reducer = function(state, action) {
  if (typeof state === "undefined")
    return DEFAULT_STATE;

  // This is just a placeholder, replace it with your code.
  switch (action.type) {
  case "SELECT_SLOT": {
    var day = action.day
    var index = action.index
    var copy = Object.assign({}, state)
    var dayCopy = copy.cal[day]
    var selected = dayCopy[index].selected
    dayCopy[index] = {name: action.evtTitle, atendee: action.name, phoneNum: action.phone , description: "", selected: !selected}
    console.log(day)
    var newState = Object.assign({}, copy)
    return newState
  }
  case "SELECT_DAY": {
    return Object.assign({}, state, {day: action.day, index: action.index})
  }
  case "TOGGLE_MODAL": {
    return Object.assign({}, state, {modal: !state.modal})
  }
  default:
    return state;
  }
};

module.exports = reducer;
