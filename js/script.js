const generate = document.querySelector('#generate');
const output = document.querySelector('.output');

function passGenerate(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%_-!()';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

generate.addEventListener('click' , function(){
    let pass = passGenerate(20);
    output.innerHTML = pass;
});
