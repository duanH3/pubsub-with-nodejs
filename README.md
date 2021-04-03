# Vanilla JS Notes

# Async Await
Best explaination https://javascript.info/async-await

In real situations, the promise may take some time before it rejects. In that case there will be a delay before await throws an error.

We can catch that error using try..catch, the same way as a regular throw:
```
async function f() {

  try {
  
    let response = await fetch('/no-user-here');
    let user = await response.json();
    
  } catch(err) {
  
    // catches errors both in fetch and response.json
    console.log(err);
  }
}

f();
```


# Basic DOM

Use innerHTML for creating new elements.
Use insertAdjascentHTML for more secure.
Use textContent for inside text.

# Local Storage

Stores in brower until hard reload/localstorage.clear(). Can be used to store data that will persist through a soft refresh.
Syntax is similiar to objects with dot notation.
The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage gets cleared when the page session ends — that is, when the page is closed.

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.

The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).

# .forEach()

The forEach() method executes a provided function once for each array element.

```
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});
```


# .map()

The map() method creates a new array with the results of calling a provided function on every element in the calling array.
Higher-Order function.

```
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```
The map function creates a new array by calling a specific function on each element in an initial array. For example, if you have an array of strings in the form "MM-DD" that represent birthdays and you want to convert each element to be in a different format, you could use the map function to create a new array with new elements. 

```
var bdays = ['08-14', '10-04', '04-21']; 

// we want a new array where the birthdays will be in the format: MM/DD
// the elem parameter will be each element from the original array 
var bdays2 = bdays.map(function(elem) { 
  return elem.replace('-', '/');
});

console.log(bdays2); // => ['08/14', '10/04', '04/21']
```
Another simple example using the map function to round an array of numbers up in JavaScript:
```
var arr = [1.5, 2.56, 5.1, 12.33];

// round each number up in an array
var rounded = arr.map(Math.ceil);

console.log(rounded); // => [2, 3, 6, 13]
```

# .filter()

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
Higher-Order function.

```
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

The filter function creates a new array with all elements from an original array that pass a certain functions test. For example, you can use the filter function to create a new array of only positive values, like below. The function being called takes in an argument which is the value of the current element in the array.
```
var nums = [-4, 3, 2, -21, 1];

var pos = nums.filter(function(el) {
  return el > 0;
});

console.log(pos); // => [3, 2, 1]
```
You can also, for example, filter out all objects in a data file that have incorrect or undefined values. In the example below, we filter out all elements that have an incorrect age value.
```
var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];

// dataMod will now contain only the first two objects in the data array
var dataMod = data.filter(function(el) {
  if (el.name != undefined && el.age != undefined) {  
    return true;
  }
  else { 
    return false; 
  }
});
```
