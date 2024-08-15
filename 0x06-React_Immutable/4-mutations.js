import { Map } from 'immutable';

// Create an Immutable Map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create map2 by modifying specific values in the first map
export const map2 = map.withMutations((map) => {
  map.set(2, 'Benjamin').set(4, 'Oliver');
});
