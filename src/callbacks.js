// ===================== EACH =====================

// Call iterator(value, key, collection) for each element of collection.
// Accepts both arrays and objects.
//
// Note: each() does not have a return value, but rather simply runs the
// iterator function over each item in the input collection.

each = function(collection, iterator) {
  // Write your code here
};

// ===================== FILTER =====================

// Return all elements of an array that pass a truth test.

// Requirement: Implement your .each() function

filter = function(collection, test) {
  // Write your code here
};

// ===================== MAP =====================

// Return the results of applying an iterator to each element.

// map() is a useful primitive iteration function that works a lot
// like each(), but in addition to running the operation on all
// the members, it also maintains an array of results.

// Requirement: Implement your .each() function

map = function(collection, iterator) {

  // Write your code here
};

// ===================== REDUCE =====================

// Reduces an array or object to a single value by repetitively calling
// iterator(accumulator, item) for each item. accumulator should be
// the return value of the previous iterator call.
//
// You can pass in a starting value for the accumulator as the third argument
// to reduce(). If no starting value is passed, the first element is used as
// the accumulator, and is never passed to the iterator. In other words, in
// the case where a starting value is not passed, the iterator is not invoked
// until the second element, with the first element as it's second argument.
//
// Example:
//   var numbers = [1,2,3];
//   var sum = reduce(numbers, function(total, number){
//     return total + number;
//   }, 0); // should be 6
//
//   var identity = reduce([5], function(total, number){
//     return total + number * number;
//   }); // should be 5, regardless of the iterator function passed in
//          No accumulator is given so the first element is used.

// Requirement: Implement your .each() function

reduce = function(collection, iterator, accumulator) {
  // Write your code here
};
