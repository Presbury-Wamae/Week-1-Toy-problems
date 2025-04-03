// Get the DOM elements
const netSalaryInput = document.getElementById('netsalary');
const calculateBtn = document.querySelector('button');
const resultDisplay = document.getElementById('salaryResult');

// Add event listener to the button
calculateBtn.addEventListener('click', calculateSalary);

function calculateSalary() {
   
    // Since the HTML only has one input, we'll use that as the basicSalary
    // and set benefits to 0 (or you could prompt for benefits)
    const basicSalary = parseFloat(netSalaryInput.value);
    
    // Defaulting to 0 since there's no benefits input
    const benefits = 0; 
    
    if (isNaN(basicSalary)) {
        resultDisplay.textContent = "Please enter a valid number for salary";
        return;
    }
    
    // Calculate using your existing function
    const result = netSalary(basicSalary, benefits);
    
    // Display the results in the paragraph
    resultDisplay.innerHTML = `
        Gross Salary: KSh ${result.grossSalary.toFixed(2)}<br>
        PAYE: KSh ${result.PAYE.toFixed(2)}<br>
        SHIF: KSh ${result.SHIF.toFixed(2)}<br>
        NSSF: KSh ${result.NSSF.toFixed(2)}<br>
        Housing Levy: KSh ${result.housingLevy.toFixed(2)}<br>
        <strong>Net Salary: KSh ${result.netSalary.toFixed(2)}</strong>
    `;
}

// Your existing netSalary function remains exactly the same
function netSalary(basicSalary, benefits){
    let grossSalary = basicSalary + benefits;

    let PAYE;

    if(grossSalary <= 24000){
        PAYE = 0.1 * grossSalary;
    }
    else if (grossSalary > 24000 && grossSalary <= 32333){
        PAYE = 0.25 * grossSalary; 
    }
    else if (grossSalary > 32333 && grossSalary <= 500000){
        PAYE = 0.3 * grossSalary;
    }
    else if (grossSalary > 500000 && grossSalary <= 800000){
        PAYE = 0.325 * grossSalary;
    }
    else{
        PAYE = 0.35 * grossSalary;
    }

    let SHIF = grossSalary * 0.0275;

    let NSSF;
    if (grossSalary <= 8000){
        NSSF = 0.06 * grossSalary;
    } 
    else{
        NSSF = 0.06 * grossSalary
    }

    let housingLevy = grossSalary * 0.015;

    let netSalary = grossSalary - (PAYE + SHIF + NSSF + housingLevy)

    return {
        grossSalary,
        PAYE,
        SHIF,
        NSSF,
        housingLevy,
        netSalary
    };
}