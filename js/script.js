const btn = document.querySelector('.btn');
const length = document.querySelector('#length');
const lengthValue = document.querySelector('#length-value');
const storangValue = document.querySelector('.storang-value');
const digits = document.querySelector('#digits');
const digitsValue = document.querySelector('#digits-value');
const capitals = document.querySelector('#capitals');
const capitalsValue = document.querySelector('#capitals-value');
const symbols = document.querySelector('#symbols');
const symbolsValue = document.querySelector('#symbols-value');
const copy = document.querySelector('.copy');
const textarea = document.querySelector('#textarea');
const generate = document.querySelector('.generate');

// Open GitHub page
btn.addEventListener('click', () => {
    window.open('https://github.com/Mhyar-nsi/Password-Generator', '_blank');
});

// Update length value and strength bar
length.addEventListener('input', () => {
    lengthValue.innerHTML = length.value.padStart(2, '0'); // Always 2 digits
    let lengthPercentage = (length.value / 25) * 100;
    storangValue.style.width = lengthPercentage + '%';
    storangValue.style.backgroundColor = getStrengthColor(lengthPercentage);
});

function getStrengthColor(percentage) {
    if (percentage <= 20) return 'red';
    if (percentage <= 40) return '#f53d3d';
    if (percentage <= 60) return 'orange';
    if (percentage <= 80) return 'green';
    return '#38ef7d';
}

// Update digits value
digits.addEventListener('input', () => {
    digitsValue.innerHTML = digits.value.padStart(2, '0');
});

// Update capitals value
capitals.addEventListener('input', () => {
    capitalsValue.innerHTML = capitals.value.padStart(2, '0');
});

// Update symbols value
symbols.addEventListener('input', () => {
    symbolsValue.innerHTML = symbols.value.padStart(2, '0');
});

// Copy to clipboard
copy.addEventListener('click', () => {
    textarea.select();
    navigator.clipboard.writeText(textarea.value);
    copy.innerHTML = 'Copied!';
    copy.classList.replace('copy', 'copied');
    setTimeout(() => {
        copy.innerHTML = 'Copy';
        copy.classList.replace('copied', 'copy');
    }, 2500);
});

// Generate password
function passGenerate() {
    const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbers = '0123456789';
    const symbolsChars = '!@#$%_-*';

    let result = '';

    // Add required number of digits, capitals, and symbols
    for (let i = 0; i < digits.value; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    for (let i = 0; i < capitals.value; i++) {
        result += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
    for (let i = 0; i < symbols.value; i++) {
        result += symbolsChars.charAt(Math.floor(Math.random() * symbolsChars.length));
    }

    // Add remaining characters as lowercase
    let remainingLength = length.value - result.length;
    for (let i = 0; i < remainingLength; i++) {
        result += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }

    // Shuffle the result to make it more random
    return result.split('').sort(() => Math.random() - 0.5).join('');
}

// Generate password on button click
generate.addEventListener('click', () => {
    textarea.innerHTML = passGenerate();
});
