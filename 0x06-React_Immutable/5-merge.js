import { List, Map } from 'immutable';

// Concatenates two arrays and returns a List containing their values
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

// Merges two objects and returns a List containing the merged values
export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2).toList();
}
