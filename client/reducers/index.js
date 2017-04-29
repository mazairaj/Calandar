var Actions = require('../actions');
// var _ = require('underscore')
// var mongoose = require('mongoose');
// var Event = require('../models/event')

var emptySlot = {name: "Available Slot", atendee: "No Attendee", phoneNum: "No Attendee", description: "", selected: false}
const DEFAULT_STATE = {
  //Default state inlcudes the contents of the calendar, the activity of the modal,
  //and the selected day and index.
  // Contents of Calendar include event title, attendee name and
  //phoneNumber
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

const reducer = function(state, action) {
  if (typeof state === "undefined")
    return DEFAULT_STATE;

//Switch case returned from type of action object
  switch (action.type) {
  case "SELECT_SLOT": {
    //update contents of calendar event
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
    //Select day and index for reference in modal
    return Object.assign({}, state, {day: action.day, index: action.index})
  }
  case "TOGGLE_MODAL": {
    //toggle modal state
    return Object.assign({}, state, {modal: !state.modal})
  }
  default:
    return state;
  }
};

module.exports = reducer;
