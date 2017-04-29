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
export function selectDay(day, index){
  return {
    type: 'SELECT_DAY',
    day: day,
    index: index
  }
}
export function modalToggle() {
  return {
    type: "TOGGLE_MODAL"
  }
}
