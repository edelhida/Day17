// Lodash

const _ = require('lodash');

// Only change code below this line

// users nested array with four objects starts here

let users = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 24, gender: 'male' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' },
  { id: 3, firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male' },
  { id: 4, firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female' },
];

// users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
  var output = '';
  output = users.map(user => {
    return (
      user.id +
      ' - ' +
      user.firstName +
      ' ' +
      user.lastName +
      ' ' +
      'is ' +
      user.age +
      ',' +
      ' ' +
      user.gender
    );
  });
  return output;
}

// getUsers function - list of users ends here

// findUserById(lastName, gender) function starts here

function findUserById(id) {
  try {
    var user = _.find(users, { id: id });

    var { id, firstName, lastName, age, gender } = user;

    var iFindUser =
      id +
      ' - ' +
      firstName +
      ' ' +
      lastName +
      ' ' +
      'is ' +
      age +
      ',' +
      ' ' +
      gender;

    return iFindUser;
  } catch (error) {
    return 'Cannot read property ' + id;
  }
}

// findUserById(id) function ends here

// Only change code below this line

console.log(getUsers());
console.log(findUserById(0));
console.log(findUserById(2));

module.exports = findUserById;
