function calculateBMI() {
    // Get input values
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const resultElement = document.getElementById("bmiResult");

    // Validate input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultElement.style.display = "block";
        resultElement.style.backgroundColor = "#e74c3c";
        resultElement.textContent = "Please enter valid height and weight values.";
        return;
    }

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI category and set color
    let category;
    if (bmi < 18.5) {
        category = "Underweight";
        resultElement.className = "result underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
        resultElement.className = "result normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
        resultElement.className = "result overweight";
    } else {
        category = "Obese";
        resultElement.className = "result obese";
    }

    // Display result with BMI value and category
    resultElement.style.display = "block";
    resultElement.textContent = `Your BMI is ${bmi} (${category})`;
}
