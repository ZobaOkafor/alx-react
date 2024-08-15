import { is, Map } from 'immutable';

// Checks if two Immutable.js Maps are equal
export default function areMapsEqual(map1, map2) {
  return is(map1, map2);
}
