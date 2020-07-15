/*
Objects Exercise

I’m going to keep this exercise quite simple. I’ll give you some harder object oriented stuff to do after the section on classes coming later in the course.

Task 1

Create a constructor ExamResultSet. It should take as it’s only argument an array of numbers that represent exam results.

An ExamResultSet instance should have two functions:

getAverage : no arguments, returns a number which is the average of all of the results in the result set.

getHighest: no arguments, returns the highest result in the set

getLowest: no arguments, returns the lowest result in the set

You could manually calculate the min and max in the array, but these functions might make it easier.

Math.min https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/min

Math.max
https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/math/max

You’d need to use them with something I haven’t shown you yet, arguments spread:

Math.max(...[9, 4, 5, 3]) which is the same as doing Math.max(9, 4, 5, 3). The argument spread syntax (ES6+) explodes an array when used as a function argument such that each element in the array is a new argument to the function.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
*/

function ExamResultSet(results) {
    this.examResults = results;
};

ExamResultSet.prototype.getAverage = function () {
    if(this.examResults.length === 0) {
        return 0;
    };
    return this.examResults.reduce((a,b) => a + b, 0) / this.examResults.length;
};

ExamResultSet.prototype.getHighest = function() {
    return Math.max(...this.examResults);
};

ExamResultSet.prototype.getLowest = function() {
    return Math.min(...this.examResults);
};


/*
Task 2

Create a AddableExamResultSet constructor that takes no arguments, and inherits getHighest and getLowest and getAverage from ExamResultSet.

It should also have the following function:

add() that takes a number as the argument, and adds this number to the result set. So:

const set = new AddableExamResultSet();
set.add(10);
set.add(20);
set.add(30);
set.getAverage(); // 20
*/

function AddableExamResultSet() {
    this.examResults = [];
};

AddableExamResultSet.prototype = Object.create(ExamResultSet.prototype);

AddableExamResultSet.prototype.add = function(result) {
    this.examResults.push(result);
};