
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let result = []
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let columInd
      if (i % 2 === 0) {
        columnInd = j
        
      } else {
        columnInd = matrix[i].length - j - 1
      }
     result.push(matrix[i][columnInd]) 
    }
    
  }
 
  return result
}
