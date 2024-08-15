import { List } from 'immutable';

// Converts an array into an immutable List
export function getListObject(array) {
  return List(array);
}

// Appends a string to the List and returns the updated List
export function addElementToList(list, element) {
  return list.push(element);
}
