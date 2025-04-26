
// filepath: c:\Users\zein\Documents\RevoU\21-apr-25-perhisi\website\js\script.js

// Function to display error messages
function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

// Function to clear error messages
function clearError() {
    const errorElement = document.getElementById('error-message');
    errorElement.style.display = 'none';
}

// Function to validate input
function validateInput(input, type) {
    if (input.trim() === '') {
        showError(`Masukkan suhu dalam ${type}!`);
        return false;
    }

    if (isNaN(input)) {
        showError('Masukkan angka yang valid!');
        return false;
    }

    clearError();
    return true;
}

// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    const celsiusInput = document.getElementById('konversi-input').value;
    const fahrenheitOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (!validateInput(celsiusInput, 'Celcius')) return;

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9 / 5) + 32;

    fahrenheitOutput.value = fahrenheit.toFixed(2);
    calculationDetail.value = `${celsius}°C x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Function to reset the form
function resetForm() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
    clearError();
}

// Function to reverse the conversion (Fahrenheit to Celsius)
function reverseConversion() {
    const fahrenheitInput = document.getElementById('konversi-input').value;
    const celsiusOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (!validateInput(fahrenheitInput, 'Fahrenheit')) return;

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5 / 9;

    celsiusOutput.value = celsius.toFixed(2);
    calculationDetail.value = `(${fahrenheit}°F - 32) x 5/9 = ${celsius.toFixed(2)}°C`;
}

// Event Listeners for Buttons
document.querySelector('.bg-1').addEventListener('click', (e) => {
    e.preventDefault();
    convertTemperature();
});

document.querySelector('.bg-2').addEventListener('click', (e) => {
    e.preventDefault();
    resetForm();
});

document.querySelector('.bg-3').addEventListener('click', (e) => {
    e.preventDefault();
    reverseConversion();
});