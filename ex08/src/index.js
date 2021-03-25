// Lodash

const _ = require('lodash');

// Only change code below this line

// users nested array with four objects starts here

let users = [
  { firstName: 'John', lastName: 'Doe', age: 24, gender: 'male' },
  { firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' },
  { firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male' },
  { firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female' },
];

// users nested array with four objects ends here

// getUsers function - list of users starts here

function getUsers() {
  var output = '';
  output = users.map(user => {
    return (
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

// findUser(lastName, gender) function starts here

function findUser(lastName, gender) {
  try {
    var user = _.find(users, { lastName: lastName, gender: gender });

    var { firstName, lastName, age, gender } = user;

    var iFindUser =
      firstName + ' ' + lastName + ' ' + 'is ' + age + ',' + ' ' + gender;

    return iFindUser;
  } catch (error) {
    return 'Cannot read property ' + lastName + ' of undefined';
  }
}

// findUser(lastName, gender) function ends here

// Only change code below this line

console.log(getUsers());
console.log(findUser('Doe', 'male'));
console.log(findUser('De', 'male'));

module.exports = findUser;
