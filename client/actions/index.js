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

const ADD_EVENT = 'ADD_EVENT';

export function selectSlot(day, index) {
  return {
    type: "SELECT_SLOT",
    day: day,
    index: index
  }
}

export function modalToggle() {
  return {
    type: "TOGGLE_MODAL"
  }
}
