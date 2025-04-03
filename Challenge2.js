function checkSpeed(speed) {
    if (isNaN(speed) || speed < 0) {
        return "Invalid input! Please enter a valid speed.";
    }
    
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed < speedLimit) {
        return "Ok";
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        
        if (demeritPoints > 12) {
            return `Demerit points ${demeritPoints} . License suspended`;
        } else {
            return `Points: ${demeritPoints}`;
        }
    }
}
function calculateSpeed(){
    
    // Get user input
    let speed = document.getElementById("speed").value

    // Convert input to a number
    speed = Number(speed)

    // Call getStudentGrade function
    let result = checkSpeed(speed)

    // Display result on the page
    document.getElementById("speedResult").innerText = result
}

// Event listener for Enter key press
document.getElementById("speed").addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        calculateSpeed();
    }
});

// Event listener for button click
document.getElementById("calculateButton").addEventListener("click", calculateSpeed);
