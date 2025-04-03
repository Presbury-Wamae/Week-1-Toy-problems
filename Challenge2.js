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
    let speed = document.getElementById("speed").value
    speed = Number(speed)
    let result = checkSpeed(speed)
    document.getElementById("speedResult").innerText = result
}
document.getElementById("speed").addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        calculateSpeed();
    }
});
