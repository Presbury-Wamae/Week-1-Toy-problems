function getStudentGrade(marks){
    if(isNaN(marks) || marks < 0 || marks > 100){
        console.log("Invalid input! Marks should be a number between 0 and 100.");
        return;
    }
    let grade;
    if (marks > 79) {
        grade = "A";
    } 
    else if (marks >= 60) { 
        grade = "B";
    }
    else if (marks >= 50) {
        grade = "C";
    }
    else if (marks >= 40) {
        grade = "D";
    }
    else {
        grade = "E";
    }
    return `The student's grade is: ${grade}`;
}
function calculateGrade() {
    // Get user input
    let marks = document.getElementById("marks").value;

    // Convert input to a number
    marks = Number(marks);

    // Call getStudentGrade function
    let result = getStudentGrade(marks);

    // Display result on the page
    document.getElementById("gradeResult").innerText = result;
}
document.getElementById("marks").addEventListener("keypress", function (event){
    if(event.key === "Enter"){
        calculateGrade();
    }
});
