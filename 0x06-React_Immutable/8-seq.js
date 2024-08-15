import { Seq } from 'immutable';

// Capitalizes the first letter of a string
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Filters and prints students with scores >= 70, with capitalized names
export function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter(student => student.score >= 70)
    .map(student => ({
      ...student,
      firstName: capitalize(student.firstName),
      lastName: capitalize(student.lastName),
    }))
    .toJS();

  console.log(bestStudents);
}
