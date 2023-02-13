module.exports = function towelSort (matrix) {
  let towelMatrix = [];
  let indexRow = 0;
  for (const row of matrix) {
    if (indexRow % 2 === 0)
    for (let i = 0; i < row.length; i++) {
      towelMatrix.push(row[i]);
    }
    else
    for (let i = row.length-1; i >= 0; i--) {
      towelMatrix.push(row[i]);
    } 
    indexRow++
  }
  return towelMatrix;
}