/*
Task 1

Write a function, myMap which will take two arguments,
an array and a function, and return an array that
results from applying the function to every element in
the array (just a reimplementation of the native map).

Example:

myMap([1, 2, 3], x => x * 10);

returns [10, 20, 30], the same as doing
[1, 2, 3].map(x => x * 10)
*/

function myMap(arr, newFunction) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(newFunction(arr[i]));
    }
    return resultArr;
};


/*
Task 2

Write function preloadedMap, which can take any number
of arguments of any type, and returns a function that,
when called with a function (let’s call this the map
function) will return an array containing each of the
arguments to preloadedMap after having the map function
applied to them.

Example 1:

var loadedWithNames = preloadedMap('John', 'Terry', 'Dave');
loadedWithNames(name => 'Hello ' + name);

returns ['Hello John', 'Hello Terry', 'Hello Dave']


loadedWithNames(name => name + ' ' + name);

returns ['John John', 'Terry Terry', 'Dave Dave']


Example 2: 

var loadedWithNumbers = preloadedMap(1, 2, 3)
loadedWithNumbers(x => x - 1);

returns [0, 1, 2]
*/

function preloadedMap() {
    let newArr = Array.from(arguments);
    return function(newFunction) {
        return newArr.map(newFunction);
    }
}