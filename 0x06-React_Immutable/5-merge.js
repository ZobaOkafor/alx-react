import { Map, List } from 'immutable';

// Concatenates two arrays and returns a List containing their values
export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return List1.concat(List2);
}

// Merges two objects and returns a List containing the merged values
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2);
}
