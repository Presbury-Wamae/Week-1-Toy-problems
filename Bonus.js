// (BubbleSort)
const array = [2, 8, 6, 9, 7, 4, 1, 3, 5];

function myArray(array){
    return array.sort((a, b) => (a - b)
    );
}
console.log(myArray(array));


// Staircase problem 

function steps(n) {
    for (let row = 0; row < n; row++) {
      let stair = '';
      for (let col = 0; col < n; col++) {
        stair += (col <= row) ? '#' : ' ';
      } 
      console.log(stair);
    }
  }
  
