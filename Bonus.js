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
  
//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
    getVolume() {
      const volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return parseFloat(volume.toFixed(4)); 
    }
  }
  const myCylinder = new Cylinder(5, 10); 
const volume = myCylinder.getVolume();
console.log(`Volume of the cylinder: ${volume}`)