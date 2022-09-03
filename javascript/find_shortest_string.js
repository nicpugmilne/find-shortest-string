function findShortestString(arr) {
  // type your code here
  let lengths = [];
  arr.forEach((str) => {
    lengths.push(str.length);
  });
  let min = Math.min(...lengths);
  let index = lengths.indexOf(min);
  return arr[index];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file

//For each element in the array, determine the length of the string/element.
//Create a new array with the length. The length indicator should be at the same index as the original element.
//Find the lowest value in the new array
//Match that to a string/element in the original array

// And a written explanation of your solution
