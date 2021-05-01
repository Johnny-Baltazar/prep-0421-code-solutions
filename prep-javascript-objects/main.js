var person = {
  firstName: 'Steve',
  lastName: 'Martin',
  hobby: 'Banjo Playing'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);

person.job = 'Jerk';
console.log("The person's current job is: " + person.job);

person.previousJob = 'amigo';
console.log("The person's previous job is:", person.previousJob);

console.log('The complete person object: ', person);

var myCar = {
  make: 'Chrysler',
  model: 'Le Baron',
  year: '1986'
}
;
console.log('Car Information', myCar);

myCar['owner'] = fullName;
console.log('My name is', myCar['owner'], 'and I drive a', myCar['year'], myCar['make'], myCar['model']);

myCar['color'] = 'green';

console.log('My full car info:', myCar);
