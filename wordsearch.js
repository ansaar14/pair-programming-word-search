// For this challenge, you'll be implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:

// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

// letters = nested array
// words = string

// call transpose function with parameter letter??
// transpose function should invert columns and rows
const transpose = function(matrix) {
  // Put your solution here
  let newMatrix = [];
  for (let row = 0; row < matrix[0].length; row++) {
    let tmp = [];
    for (let col = 0; col < matrix.length; col++) {
      // push
      tmp.push(matrix[col][row]);
    }
    //push tmp to the newMatrix
    newMatrix.push(tmp);
  }
  return newMatrix;
};


const wordSearch = (letters, word) => {
  const reverse = transpose(letters);

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = reverse.map(ls => ls.join(''));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
    
  const backwardsVerticalJoin = reverse.map(ls => ls.reverse().join(''));
  for (l of backwardsVerticalJoin) {
    if (l.includes(word)) return true;
  }
  const backwardsHorizontalJoin = letters.map(ls => ls.reverse().join(''));
  // console.log("backwardsHorizontalJoin",backwardsHorizontalJoin);
  for (l of backwardsHorizontalJoin) {
    if (l.includes(word)) return true;
  }

    
  return false;

  /*
    const arr = [
        ['h', 'e','l', 'l','o],
        ['a', 'b','c','d',e']
    ]
    horizontalJOin = [['hello'], ['abcde']
    */
};

module.exports = wordSearch;