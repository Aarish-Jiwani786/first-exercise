console.log(`Hello World!`);

function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const mergedArray: Array<number> = [];
  const arr1Size: number = arr1.length;
  const arr2Size: number = arr2.length;
  let largestArray: number = 0;
  if (arr1Size > arr2Size) {
    largestArray = arr1Size;
  } else if (arr2Size > arr1Size) {
    largestArray = arr2Size;
  } else {
    largestArray = arr1Size;
  }
  for (let i = 0; i < largestArray; i += 1) {
    if (i < arr1Size) {
      mergedArray.push(arr1[i]);
    }
    if (i < arr2Size) {
      mergedArray.push(arr2[i]);
    }
  }

  return mergedArray;
}

// First Test
const array1: Array<number> = [4, 5, 23, 18, 9, -5];
const array2: Array<number> = [18, 74, 88, 3, 7, 44];

const mergedArray: Array<number> = merge(array1, array2);
console.log(mergedArray);

// Second Test
const array3: Array<number> = [4, 5, 23, 18, 9, -5, 31];
const array4: Array<number> = [18, 74, 88, 3];

const mergedArray2: Array<number> = merge(array3, array4);
console.log(mergedArray2);

// Third Test
const array5: Array<number> = [18, 74, 88, 3];
const array6: Array<number> = [4, 5, 23, 18, 9, -5, 31];

const mergedArray3: Array<number> = merge(array5, array6);
console.log(mergedArray3);

// Wordle Function
function checkWord(guess: string, secret: string): string {
  let result: string = ``;
  for (let i = 0; i < 5; i += 1) {
    if (guess.charAt(i) === secret.charAt(i)) {
      result += 'c';
    } else if (secret.includes(guess.charAt(i))) {
      result += 'p';
    } else {
      result += 'a';
    }
  }
  return result;
}

// Wordle Test
console.log(`\nWordle Test`);
const attempts = ['rains', 'shout', 'scope', 'spoke'];

for (const word of attempts) {
  const result = checkWord(word, 'spoke');
  console.log(result);
}

console.log(`\nCandidates`);

// Candidate
type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

const rose: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};

const nathaniel: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

const total: number = 2683;
// const people: Array<Candidate>
const candidates: Array<Candidate> = [edward, rose, leonard, nathaniel];

let sum: number = 0;
for (const cand of candidates) {
  cand.votes.forEach((element) => {
    sum += element;
  });
  console.log(`${cand.name} -- ${sum} votes -- ${((sum / total) * 100).toFixed(2)}%`);
  sum = 0;
}

let precint1: number = 0;
for (const candi of candidates) {
  precint1 += candi.votes[0];
}

let precint2: number = 0;
for (const candi of candidates) {
  precint2 += candi.votes[1];
}

let precint3: number = 0;
for (const candi of candidates) {
  precint3 += candi.votes[2];
}

let precint4: number = 0;
for (const candi of candidates) {
  precint4 += candi.votes[3];
}

let precint5: number = 0;
for (const candi of candidates) {
  precint5 += candi.votes[4];
}

const precintTotal: Array<number> = [];
precintTotal.push(precint1);
precintTotal.push(precint2);
precintTotal.push(precint3);
precintTotal.push(precint4);
precintTotal.push(precint5);

let count: number = 1;
console.log(`\nEdward Underwood:`);
for (let i = 0; i < edward.votes.length; i += 1) {
  console.log(`Precint ${count} -- ${((edward.votes[i] / precintTotal[i]) * 100).toFixed(2)}%`);
  count += 1;
}

count = 1;
console.log(`\nRose Olson:`);
for (let i = 0; i < rose.votes.length; i += 1) {
  console.log(`Precint ${count} -- ${((rose.votes[i] / precintTotal[i]) * 100).toFixed(2)}%`);
  count += 1;
}

count = 1;
console.log(`\nLeonard Willis:`);
for (let i = 0; i < leonard.votes.length; i += 1) {
  console.log(`Precint ${count} -- ${((leonard.votes[i] / precintTotal[i]) * 100).toFixed(2)}%`);
  count += 1;
}

count = 1;
console.log(`\nNathaniel Taylor:`);
for (let i = 0; i < nathaniel.votes.length; i += 1) {
  console.log(`Precint ${count} -- ${((nathaniel.votes[i] / precintTotal[i]) * 100).toFixed(2)}%`);
  count += 1;
}

console.log(`\nAmount Spent per Vote`);
sum = 0;
for (const cand of candidates) {
  cand.votes.forEach((element) => {
    sum += element;
  });
  console.log(`${cand.name} spent $${(cand.funding / sum).toFixed(2)} per vote`);
  sum = 0;
}

console.log(`\nWho Won?`);

const votesTotal: Array<number> = [];

let edwardTotal: number = 0;
for (let i = 0; i < edward.votes.length; i += 1) {
  edwardTotal += edward.votes[i];
}

votesTotal.push(edwardTotal);

let roseTotal: number = 0;
for (let i = 0; i < rose.votes.length; i += 1) {
  roseTotal += rose.votes[i];
}

votesTotal.push(roseTotal);

let leonardTotal: number = 0;
for (let i = 0; i < leonard.votes.length; i += 1) {
  leonardTotal += leonard.votes[i];
}

votesTotal.push(leonardTotal);

let nathanielTotal: number = 0;
for (let i = 0; i < nathaniel.votes.length; i += 1) {
  nathanielTotal += nathaniel.votes[i];
}

votesTotal.push(nathanielTotal);

let max: number = votesTotal[0];
let secMax: number = votesTotal[1];
let index1: number = 0;
let index2: number = 0;

if ((edwardTotal / total) * 100 > 50) {
  console.log(`Edward Underwood is the Winner!!`);
} else if ((roseTotal / total) * 100 > 50) {
  console.log(`Rose Underwood is the Winner!!`);
} else if ((leonardTotal / total) * 100 > 50) {
  console.log(`Leonard Underwood is the Winner!!`);
} else if ((nathanielTotal / total) * 100 > 50) {
  console.log(`Nathaniel Underwood is the Winner!!`);
} else {
  for (let i = 1; i < candidates.length; i += 1) {
    if (votesTotal[i] > max) {
      max = votesTotal[i];
      index1 = i;
    } else if (votesTotal[i] > secMax) {
      secMax = votesTotal[i];
      index2 = i;
    }
  }
  console.log(
    `The run-off between the two Candidates with the highest votes is ${candidates[index1].name} and ${candidates[index2].name}`
  );
}
