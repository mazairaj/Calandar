/*
 * action types
 */

// These are just placeholders; replace with your code.

// const ADD_TEXT = 'ADD_TEXT';
//
// function addText(text) {
//   return { type: ADD_TEXT, text: text }
// }
//
// module.exports = {
//   ADD_TEXT: ADD_TEXT,
//   addText: addText
// };

//Called When a time slot is selected
export function selectSlot(day, index, evtTitle, name, phone) {
  return {
    type: "SELECT_SLOT",
    day: day,
    index: index,
    evtTitle: evtTitle,
    name:name,
    phone, phone
  }
}
//Used to change the redux state of the currently selected time slot
export function selectDay(day, index){
  return {
    type: 'SELECT_DAY',
    day: day,
    index: index
  }
}
//Toggles the activity of the modal by toggling the redux state
export function modalToggle() {
  return {
    type: "TOGGLE_MODAL"
  }
}
