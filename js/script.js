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

// Conversion Logic
function performConversion(input, isCelsiusToFahrenheit) {
    const inputValue = parseFloat(input);
    let result, formula;

    if (isCelsiusToFahrenheit) {
        // Celsius to Fahrenheit formula
        result = (inputValue * 9 / 5) + 32;
        formula = `${inputValue}°C x 9/5 + 32 = ${result.toFixed(2)}°F`;
    } else {
        // Fahrenheit to Celsius formula
        result = (inputValue - 32) * 5 / 9;
        formula = `(${inputValue}°F - 32) x 5/9 = ${result.toFixed(2)}°C`;
    }

    return { result: result.toFixed(2), formula };
}

// Update Labels Function
function updateLabels(inputType, outputType) {
    document.getElementById('input-label').textContent = `${inputType} (°${inputType[0]}):`;
    document.getElementById('output-label').textContent = `${outputType} (°${outputType[0]}):`;
}

// Conversion Function
function convertTemperature(isCelsiusToFahrenheit) {
    clearError();

    const inputField = document.getElementById('konversi-input');
    const outputField = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    const inputType = isCelsiusToFahrenheit ? 'Celcius' : 'Fahrenheit';
    const outputType = isCelsiusToFahrenheit ? 'Fahrenheit' : 'Celcius';

    const inputValue = inputField.value;

    if (!validateInput(inputValue, inputType)) return;

    const { result, formula } = performConversion(inputValue, isCelsiusToFahrenheit);

    outputField.value = result;
    calculationDetail.value = formula;

    // Update labels dynamically
    updateLabels(inputType, outputType);
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
    const isCelsiusToFahrenheit = document.getElementById('input-label').textContent.includes('Celcius');
    convertTemperature(isCelsiusToFahrenheit);
});

document.querySelector('.bg-2').addEventListener('click', (e) => {
    e.preventDefault();
    resetForm();
});

document.querySelector('.bg-3').addEventListener('click', (e) => {
    e.preventDefault();
    const isCelsiusToFahrenheit = !document.getElementById('input-label').textContent.includes('Celcius');
    convertTemperature(isCelsiusToFahrenheit);
});