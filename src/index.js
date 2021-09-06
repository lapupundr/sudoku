module.exports = function solveSudoku(matrix) {
  // your solution
  const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const len = matrix.length;
  
      let t = 0;
      while (matrix.flat().includes(0) && t < 20) {
          checkRow();
          t++;
      }
  
      function checkRow() {
          for (let i = 0; i < len; i++) {
              if (matrix[i].includes(0)) {
                  let x = i;
                  let y = matrix[i].indexOf(0);
                  let res = DIGITS.filter(item => !matrix[i].includes(item));
  
                  if (res.length === 1) {
                      matrix[x][y] = res[0];
                  } else {
                      let arrColumnY = [];
                      for (let row = 0; row < len; row++) {
                          arrColumnY.push(matrix[row][y]); 
                      }
                      res = res.filter(item => !arrColumnY.includes(item));
                      if (res.length === 1) {
                          matrix[x][y] = res[0];
                      }
                      
                  }
  
              }
              
          }
      }
  
      return matrix;
}
