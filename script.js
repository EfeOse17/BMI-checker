let memberName = document.getElementById("memberName");
let memberAge = document.getElementById("memberAge");
let memberWeight = document.getElementById("memberWeight");
let weightUnit = document.getElementById("weightUnit");
let memberHeight = document.getElementById("memberHeight");
let heightUnit = document.getElementById("heightUnit");
let fitnessGoal = document.getElementById("fitnessGoal");
let resultDisplay = document.getElementById("resultDisplay");

let checkMembership = document.getElementById("checkMembership");
    checkMembership.onclick = function() {
        let memberNameValue = memberName.value.trim();
        let memberAgeValue = parseInt(memberAge.value.trim());
        let memberWeightValue = parseFloat(memberWeight.value.trim());
        let memberHeightValue = parseFloat(memberHeight.value.trim());
        let weightUnitValue = weightUnit.value;
        let heightUnitValue = heightUnit.value;
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
                let memberHeightInMeters; // Variable to store heights in meter, centimeter, and inches

                    if(heightUnitValue === "cm") {
                        memberHeightInMeters = memberHeightValue / 100;
                    } else if (heightUnitValue === "m") {
                        memberHeightInMeters = memberHeightValue;
                    } else if (heightUnitValue === "ft") {
                        memberHeightInMeters = memberHeightValue * 0.3048;
                    } else if (memberUnitValue === "inch") {
                        memberHeightInMeters = memberHeightValue * 0.0254;
                    }

                    //Variable to store weight in either kg or pounds
                    let memberWeightInKg;

                        if(weightUnitValue === "kg") {
                            memberWeightInKg = memberWeightValue;
                        } else if(weightUnitValue === "lbs") {
                            memberWeightInKg = memberWeightValue * 0.453592;
                        }

                //Calculate BMI and determine the category
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