document.addEventListener("DOMContentLoaded", () => {
    const temperatureInput = document.getElementById("temperature");
    const fromScale = document.getElementById("from-scale");
    const toScale = document.getElementById("to-scale");
    const convertBtn = document.getElementById("convert-btn");
    const resetBtn = document.getElementById("reset-btn");
    const result = document.getElementById("result");
    const convertedValue = document.getElementById("converted-value");

    // Temperature conversion logic
    function convertTemperature(value, from, to) {
        if (from === to) return value;

        let tempInCelsius;
        switch (from) {
            case "Celsius":
                tempInCelsius = value;
                break;
            case "Fahrenheit":
                tempInCelsius = (value - 32) * (5 / 9);
                break;
            case "Kelvin":
                tempInCelsius = value - 273.15;
                break;
        }

        switch (to) {
            case "Celsius":
                return tempInCelsius;
            case "Fahrenheit":
                return (tempInCelsius * (9 / 5)) + 32;
            case "Kelvin":
                return tempInCelsius + 273.15;
        }
    }

    // Handle Convert Button Click
    convertBtn.addEventListener("click", () => {
        const temperature = parseFloat(temperatureInput.value);
        const from = fromScale.value;
        const to = toScale.value;

        if (isNaN(temperature)) {
            alert("Please enter a valid temperature value.");
            return;
        }

        const convertedTemp = convertTemperature(temperature, from, to).toFixed(2);
        convertedValue.textContent = `${convertedTemp} ${to}`;
        result.style.display = "block";
    });

    // Handle Reset Button Click
    resetBtn.addEventListener("click", () => {
        temperatureInput.value = "";
        fromScale.value = "Celsius";
        toScale.value = "Celsius";
        convertedValue.textContent = "--";
        result.style.display = "none";
    });
});
