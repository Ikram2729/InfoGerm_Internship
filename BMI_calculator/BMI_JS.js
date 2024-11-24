document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const calculateBtn = document.getElementById("calculate-btn");
    const resetBtn = document.getElementById("reset-btn");
    const bmiValue = document.getElementById("bmi-value");
    const bmiCategory = document.getElementById("bmi-category");
    const result = document.getElementById("result");

    calculateBtn.addEventListener("click", () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            alert("Please enter valid weight and height values!");
            return;
        }

        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters ** 2)).toFixed(1);

        bmiValue.textContent = bmi;
        result.style.display = "block";

        if (bmi < 18.5) {
            bmiCategory.textContent = "Underweight";
        } else if (bmi < 24.9) {
            bmiCategory.textContent = "Normal weight";
        } else if (bmi < 29.9) {
            bmiCategory.textContent = "Overweight";
        } else {
            bmiCategory.textContent = "Obesity";
        }
    });

    resetBtn.addEventListener("click", () => {
        weightInput.value = "";
        heightInput.value = "";
        bmiValue.textContent = "--";
        bmiCategory.textContent = "--";
        result.style.display = "none";
    });
});
