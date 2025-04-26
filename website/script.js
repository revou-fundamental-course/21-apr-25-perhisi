// Error Handling Functions
function showError(message) {
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function clearError() {
    const errorElement = document.getElementById('error-message');
    errorElement.style.display = 'none';
}

// Input Validation Function
function validateInput(input, type) {
    if (input.trim() === '') {
        showError(`Masukkan suhu dalam ${type}!`);
        return false;
    }

    if (isNaN(input)) {
        showError(`Masukkan angka yang valid untuk suhu dalam ${type}!`);
        return false;
    }

    clearError();
    return true;
}

// Conversion Functions
function convertTemperature() {
    clearError();

    const fahrenheitInput = document.getElementById('konversi-input').value;
    const celsiusOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (!validateInput(fahrenheitInput, 'Fahrenheit')) return;

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5 / 9;

    celsiusOutput.value = celsius.toFixed(2);
    calculationDetail.value = `(${fahrenheit}°F - 32) x 5/9 = ${celsius.toFixed(2)}°C`;
    
}

function reverseConversion() {
    clearError();

    const celsiusInput = document.getElementById('konversi-input').value;
    const fahrenheitOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (!validateInput(celsiusInput, 'Celcius')) return;

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9 / 5) + 32;

    fahrenheitOutput.value = fahrenheit.toFixed(2);
    calculationDetail.value = `${celsius}°C x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Reset Function
function resetForm() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
    clearError();
}

// Event Listeners
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