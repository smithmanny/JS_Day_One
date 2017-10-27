/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
*/

const largestOfFour = (arr) => {
  // let results = [];
  // for (let n = 0; n < arr.length; n++) {
  //   let largestNumber = arr[n][0];
  //
  //   for (let sb = 1; sb < arr[n].length; sb++) {
  //     if (arr[n][sb] > largestNumber) {
  //       largestNumber = arr[n][sb];
  //     }
  //   }
  //
  //   results[n] = largestNumber;
  // }
  //
  // return results;

  return arr.map((val) => val.reduce((prev, current) =>
  current > prev ? current : prev))
}

const test = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // 5, 27, 39, 1001
console.log(test)
