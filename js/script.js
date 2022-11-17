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
const warning = document.querySelector('.warning');

btn.addEventListener('click' , () => {
    window.open('https://github.com/Mhyar-nsi/Password-Generator' , '_blank');
});

length.addEventListener('mousemove' , () => {
    if (length.value < 10) {
        lengthValue.innerHTML = '0'+length.value;
        storangValue.style.width = '10%';
        storangValue.style.backgroundColor = 'red';

    } if(length.value >= 10) {
        lengthValue.innerHTML = length.value;
        storangValue.style.width = '30%';
        storangValue.style.backgroundColor = '#f53d3d';

    } if (length.value >= 14){
        lengthValue.innerHTML = length.value;
        storangValue.style.width = '50%';
        storangValue.style.backgroundColor = 'orange';

    } if (length.value >= 18) {
        lengthValue.innerHTML = length.value;
        storangValue.style.width = '70%';
        storangValue.style.backgroundColor = 'green';

    } if (length.value >= 22) {
        lengthValue.innerHTML = length.value;
        storangValue.style.width = '90%';
        storangValue.style.backgroundColor = '#38ef7d';

    } if (length.value == 25) {
        lengthValue.innerHTML = length.value;
        storangValue.style.width = '100%';
        storangValue.style.backgroundColor = '#38ef7d';
    }
});

digits.addEventListener('mousemove' , () => {
    if(digits.value < 10){
        digitsValue.innerHTML = '0'+digits.value;
    }else {
        digitsValue.innerHTML = digits.value;
    }
});

capitals.addEventListener('mousemove' , () => {
    if(capitals.value < 10){
        capitalsValue.innerHTML = '0'+capitals.value;
    } else {
        capitalsValue.innerHTML = capitals.value;
    }
});

symbols.addEventListener('mousemove' , () => {
    symbolsValue.innerHTML = '0'+symbols.value;
})

// function passGenerate() {
//     let result = '';
//     let lgth = length.value;
//     let char = 'qwertyuiopasdfghjklzxcvbnm';
//     let capital = 'QWERTYUIOPASDFGHJKLZXCVBNM';
//     let symb = '@#$()_-!';
    
//     for(let i = 1 ; i <= lgth ; i++){
//         if(digits.value > 0){
//             result += 
//         }
//     }
// }

// result += characters.charAt(Math.floor(Math.random() * charactersLength));
copy.addEventListener('click' , () => {
    textarea.select();
    let textareaValue = textarea.value;
    navigator.clipboard.writeText(textareaValue);
    copy.innerHTML = 'Copied!';
    copy.classList.remove('copy');
    copy.classList.add('copied');
    setTimeout(() => {
        copy.innerHTML = 'Copy';
        copy.classList.remove('copied');
        copy.classList.add('copy');
    } , 2500);
});
