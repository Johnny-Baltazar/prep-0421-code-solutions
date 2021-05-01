function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('Johnny');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2) * 5;
  return result;
}

var multiply = addAndMultiplyBy5(20, 10);
console.log(multiply);

function multiplyAndDivideBy5(num1, num2) {
  var result = (num1 * num2) / 5;
  return result;
}

var divide = multiplyAndDivideBy5(54, 97);
console.log(divide);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var subtract = subtractTwoNumbers(33, 42);
console.log(subtract);

function getCircleCircumference(radius) {
  var result = (2 * radius) * 3.14;
  return result;
}

var circumference = getCircleCircumference(7);
console.log(circumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}

var human = getFullName('Johnny', 'Baltazar');
console.log(human);

function cube(num1) {
  var result = num1 * num1 * num1;
  return result;
}

var cubed = cube(8);
console.log(cubed);
