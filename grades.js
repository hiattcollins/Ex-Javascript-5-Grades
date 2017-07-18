


// let numbers = [2, 4, 100, 33, 54, 1, 6];

// console.log("numbers", numbers);
// let sortedNumbers = numbers.sort(function(first, second) {
// 	console.log("first:", first, "second:", second);
// 	console.log("first minus second:", first - second);
// 	return first - second;
// });

// console.log("sortedNumbers", sortedNumbers);

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87]

console.log("Scores:", scores);

let sortedScores = scores.sort();

console.log("Sorted Scores:", sortedScores);

let gradeF = 0;
let gradeD = 0;
let gradeC = 0;
let gradeB = 0;
let gradeA = 0;

// let lengthOfSortedScores = sortedScores.length;

console.log("Sorted scores length:", sortedScores.length);

// ********** Get number of each grade ******** //

for (var i = 0; i < sortedScores.length; i++) {

	console.log(Number(sortedScores[i]));

	if (Number(sortedScores[i]) >= 50 && Number(sortedScores[i]) <= 60) {
		gradeF += 1;
	} else if (Number(sortedScores[i]) >= 61 && Number(sortedScores[i]) <= 70) {
		gradeD += 1;
	} else if (Number(sortedScores[i]) >= 71 && Number(sortedScores[i]) <= 80) {
		gradeC += 1;
	} else if (Number(sortedScores[i]) >= 81 && Number(sortedScores[i]) <= 90) {
		gradeB += 1;
	} else if (Number(sortedScores[i]) >= 91 && Number(sortedScores[i]) <= 100) {
		gradeA += 1;
	} else {
		console.log("One of these things just ain't right.")
	}

}

console.log("Number of F grades:", gradeF);
console.log("Number of D grades:", gradeD);
console.log("Number of C grades:", gradeC);
console.log("Number of B grades:", gradeB);
console.log("Number of A grades:", gradeA);

// Requirements

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?