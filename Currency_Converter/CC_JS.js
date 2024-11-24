const API_URL = "https://api.exchangerate-api.com/v4/latest/"; // Replace with a reliable API

document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromCurrency = document.getElementById("from-currency");
    const toCurrency = document.getElementById("to-currency");
    const convertBtn = document.getElementById("convert-btn");
    const refreshBtn = document.getElementById("refresh-btn");
    const result = document.getElementById("result");
    const convertedValue = document.getElementById("converted-value");

    let exchangeRates = {};

    // Fetch exchange rates and populate dropdowns
    async function fetchExchangeRates(base = "USD") {
        try {
            const response = await fetch(`${API_URL}${base}`);
            const data = await response.json();
            exchangeRates = data.rates;

            populateDropdowns(Object.keys(exchangeRates));
        } catch (error) {
            alert("Failed to fetch exchange rates. Please try again.");
        }
    }

    // Populate currency dropdowns
    function populateDropdowns(currencies) {
        fromCurrency.innerHTML = currencies.map(
            (currency) => `<option value="${currency}">${currency}</option>`
        ).join("");
        toCurrency.innerHTML = fromCurrency.innerHTML;

        fromCurrency.value = "USD";
        toCurrency.value = "EUR";
    }

    // Convert currency
    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

        const conversionRate = exchangeRates[to] / exchangeRates[from];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        convertedValue.textContent = `${convertedAmount} ${to}`;
        result.style.display = "block";
    });

    // Refresh exchange rates
    refreshBtn.addEventListener("click", () => {
        fetchExchangeRates(fromCurrency.value);
        alert("Exchange rates refreshed!");
    });

    // Initialize with default base currency
    fetchExchangeRates();
});
