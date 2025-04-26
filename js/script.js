
// filepath: c:\Users\zein\Documents\RevoU\21-apr-25-perhisi\js\script.js

// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    const celsiusInput = document.getElementById('konversi-input').value;
    const fahrenheitOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (celsiusInput === '') {
        alert('Masukkan suhu dalam Celcius!');
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;

    fahrenheitOutput.value = fahrenheit.toFixed(2);
    calculationDetail.value = `${celsius}°C x 9/5 + 32 = ${fahrenheit.toFixed(2)}°F`;
}

// Function to reset the form
function resetForm() {
    document.getElementById('konversi-input').value = '';
    document.getElementById('result-input').value = '';
    document.getElementById('calculate-detail').value = '';
}

// Function to reverse the conversion (Fahrenheit to Celsius)
function reverseConversion() {
    const fahrenheitInput = document.getElementById('konversi-input').value;
    const celsiusOutput = document.getElementById('result-input');
    const calculationDetail = document.getElementById('calculate-detail');

    if (fahrenheitInput === '') {
        alert('Masukkan suhu dalam Fahrenheit!');
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput);
    const celsius = (fahrenheit - 32) * 5/9;

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
