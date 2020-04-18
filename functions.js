/* Given an array of numbers, return a count representing the number of elements whose value is greater than 40. 
 If there are no values above 40, then the function should return 0.*/

//1 input - array of numbers
function getElementsAbove40(numbers) {
    // result variable / accumulator
    var count = 0;
//iterating over the array of numbers
  for (var i = 0; i < numbers.length; i++) {
    
    //checking if the numbers in the input array are greater than 40
    if (numbers[i] > 40) {
      count++;
    }
  }
//returning the total of numbers in the array that are greater than 40
  return count;
}

// testing the function by calling it 
var result1 = getElementsAbove40([1, 42, 5, 314, 2, 89]);
console.log('should log 3:', result1);

var result2 = getElementsAbove40([1, 4, 3, 2, 6]);
console.log('should log 0:', result2);