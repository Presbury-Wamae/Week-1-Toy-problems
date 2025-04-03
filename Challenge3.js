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

       
let netSalary = grossSalary - (PAYE + SHIF + NSSF + housingLevy )

    return {
        grossSalary,
        PAYE,
        SHIF,
        NSSF,
        housingLevy,
        netSalary
    };

}
console.log(netSalary(50000, 2000));