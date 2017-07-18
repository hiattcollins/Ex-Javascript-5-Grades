

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87]

console.log("Scores:", scores);

let sortedScores = scores.sort();

console.log("Sorted Scores:", sortedScores);

let gradeF = 0;
let gradeD = 0;
let gradeC = 0;
let gradeB = 0;
let gradeA = 0;

let arrayLength = sortedScores.length;

// console.log("Sorted scores length:", arrayLength);

// ********** Get number of each grade ******** //

for (var i = 0; i < arrayLength; i++) {

	// console.log(Number(sortedScores[i]));

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

// ********** Find lowest grade ******** //

lowestGrade = "";

if (gradeF > 0) {
	lowestGrade = "F";
	// break;
} else if (gradeD > 0) {
	lowestGrade = "D";
	// break;
} else if (gradeC > 0) {
	lowestGrade = "C";
	// break;
}  else if (gradeB > 0) {
	lowestGrade = "B";
}  else if (gradeA > 0) {
	lowestGrade = "A";
}  else {
	lowestGrade = "There appear no be no grades here.";
}

console.log("The lowest grade in this class is:", lowestGrade);

// ********** Find highest grade ******** //

highestGrade = "";

if (gradeA > 0) {
	highestGrade = "A";
	// break;
} else if (gradeB > 0) {
	highestGrade = "B";
	// break;
} else if (gradeC > 0) {
	highestGrade = "C";
	// break;
}  else if (gradeD > 0) {
	highestGrade = "D";
}  else if (gradeA > 0) {
	highestGrade = "F";
}  else {
	highestGrade = "There appear no be no grades here.";
}

console.log("The highest grade in this class is:", highestGrade);


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