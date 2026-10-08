let memberName = document.getElementById("memberName");
let memberAge = document.getElementById("memberAge");
let memberWeight = document.getElementById("memberWeight");
let memberHeight = document.getElementById("memberHeight");
let fitnessGoal = document.getElementById("fitnessGoal");
let resultDisplay = document.getElementById("resultDisplay");

let checkMembership = document.getElementById("checkMembership");
    checkMembership.onclick = function() {
        let memberNameValue = memberName.value.trim();
        let memberAgeValue = parseInt(memberAge.value.trim());
        let memberWeightValue = parseFloat(memberWeight.value.trim());
        let memberHeightValue = parseFloat(memberHeight.value.trim());
        let fitnessGoalValue = fitnessGoal.value;

        //Validate inputs
            if(memberNameValue === '') {
                // Name error
                resultDisplay.innerHTML = "❗Please enter a valid name"
            } else if(Number.isNaN(memberAgeValue) || memberAgeValue < 18) {
                // Age error
                resultDisplay.innerHTML = "You must be at least 18 years old to join the fitness program."
            } else if(Number.isNaN(memberWeightValue) || memberWeightValue <= 0) {
                // Weight error
                resultDisplay.innerHTML = "❗Please enter a valid weight"
            } else if(Number.isNaN(memberHeightValue) || memberHeightValue <= 0) {
                // Height error
                resultDisplay.innerHTML = "❗Please enter a valid height"
            } else if(fitnessGoalValue === '') {
                // Fitness Goal error
                resultDisplay.innerHTML = "❗Please select a fitness goal"
            } else {

                // All valid - calculate the BMI here
                let memberHeightInMeters = memberHeightValue / 100; // Convert height from cm to meters
                let bmi = memberWeightValue / (memberHeightInMeters * memberHeightInMeters);
                let bmiCategory;

                    if(bmi < 18.5) {
                        bmiCategory = "Underweight"
                    } else if (bmi < 25) {
                        bmiCategory = "Normal Weight"
                    } else if (bmi < 30) {
                        bmiCategory = "Overweight"
                    } else {
                        bmiCategory = "Obese"
                    }

                    // Displaying the actual result
                    resultDisplay.innerHTML = 
                        `Hello ${memberNameValue}.<br>
                        Your BMI is ${bmi.toFixed(2)}.<br>
                        Category: ${bmiCategory}`
            };
            
    };