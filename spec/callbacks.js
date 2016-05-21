(function() {
  'use strict';

  describe('Callback Exercises', function() {

    describe('each', function() {
      it('should iterate over arrays, providing access to the element, index, and array itself', function() {
        var animals = ['ant', 'bat', 'cat'];
        var iterationInputs = [];

        each(animals, function(animal, index, list) {
          iterationInputs.push([animal, index, list]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals]
        ]);
      });

      it('should only iterate over the array elements, not properties of the array', function() {
        var animals = ['ant', 'bat', 'cat'];
        var iterationInputs = [];

        animals.shouldBeIgnored = 'Ignore me!';

        each(animals, function(animal, index, list) {
          iterationInputs.push([animal, index, list]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 0, animals],
          ['bat', 1, animals],
          ['cat', 2, animals]
        ]);
      });

      it('should iterate over objects, providing access to the element, index, and object itself', function() {
        var animals = { a: 'ant', b: 'bat', c: 'cat' };
        var iterationInputs = [];

        each(animals, function(animal, key, object) {
          iterationInputs.push([animal, key, object]);
        });

        expect(iterationInputs).to.eql([
          ['ant', 'a', animals],
          ['bat', 'b', animals],
          ['cat', 'c', animals]
        ]);
      });
    });

    describe('filter', function() {
      it('should return all even numbers in an array', function() {
        var isEven = function(num) { return num % 2 === 0; };
        var evens = filter([1, 2, 3, 4, 5, 6], isEven);

        expect(evens).to.eql([2, 4, 6]);
      });

      it('should return all odd numbers in an array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var odds = filter([1, 2, 3, 4, 5, 6], isOdd);

        expect(odds).to.eql([1, 3, 5]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var isOdd = function(num) { return num % 2 !== 0; };
        var numbers = [1, 2, 3, 4, 5, 6];
        var evens = filter(numbers, isOdd);

        expect(evens).to.not.equal(numbers);
      });
    });

    describe('map', function() {
      it('should apply a function to every value in an array', function() {
        var doubledNumbers = map([1, 2, 3], function(num) {
          return num * 2;
        });

        expect(doubledNumbers).to.eql([2, 4, 6]);
      });

      it('should produce a brand new array instead of modifying the input array', function() {
        var numbers = [1, 2, 3];
        var mappedNumbers = map(numbers, function(num) {
          return num;
        });

        expect(mappedNumbers).to.not.equal(numbers);
      });
    });

    describe('reduce', function() {
      it('should be able to sum up an array', function() {
        var add = function(tally, item) {return tally + item; };
        var total = reduce([1, 2, 3], add, 0);

        expect(total).to.equal(6);
      });

      it('should use the first element as an accumulator when none is given', function() {
        var add = function(tally, item) {return tally + item; };
        var total = reduce([1, 2, 3], add);

        expect(total).to.equal(6);
      });

      it('should invoke the iterator on the first element when given an accumulator', function() {
        var sumSquares = function(tally, item) {return tally + item * item; };
        var total = reduce([2, 3], sumSquares, 0);

        expect(total).to.equal(13);
      });

      it('should not invoke the iterator on the first element when using it as an accumulator', function() {
        var sumSquares = function(tally, item) {return tally + item * item; };
        var total = reduce([2, 3], sumSquares);

        expect(total).to.equal(11);
      });
    });

  });

}());
