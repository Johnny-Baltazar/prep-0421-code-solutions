var languagesArray = [
  'html',
  'css',
  'javascript',
  'react',
  'node.js'
];
console.log('Languages Array ', languagesArray);

console.log('Array Length', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('Updated Array', languagesArray);

languagesArray.pop();
console.log('Last Index Removed', languagesArray);

languagesArray.unshift('C++');
console.log('Added Element to the Front', languagesArray);

languagesArray.shift();
console.log('Removed First Element', languagesArray);

console.log('3rd Element in languagesArray', languagesArray[2]);

console.log('The Final Length of the Array is', languagesArray.length);

var lastItem = languagesArray[languagesArray.length - 1];
console.log('The last item in the array is', lastItem);
