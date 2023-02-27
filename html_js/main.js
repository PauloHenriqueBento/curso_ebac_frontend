const form = document.getElementById('form');

const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const aviso = document.getElementById('info')
const button = document.getElementById('submit')

let formValido = false;

function validaValores(a, b) {
    a && b ? button.classList.add('enviar') : button.classList.remove('enviar');
    return b > a ? formValido = true : formValido = false;
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (validaValores(valorA.value, valorB.value)) {
        aviso.classList.add('success')
        aviso.innerHTML = 'B é maior que A'

        valorA.value = '';
        valorB.value = '';
    } else {
        aviso.classList.add('error')
        aviso.innerHTML = 'Não posso validar'
    }
});

form.addEventListener('keyup', e => {
    formValido = false;
    if (!validaValores(valorA.value, valorB.value)) {
        aviso.classList.add('error')
        aviso.innerHTML = 'A é maior que B, forma invalida'
    } else {
        aviso.classList.remove('error')
        aviso.innerHTML = ''
    }
})
