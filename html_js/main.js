const form = document.getElementById('form');

const valorA = document.getElementById('valorA');
const valorB = document.getElementById('valorB');
const aviso = document.getElementById('info')
const button = document.getElementById('submit')

let formValido = false;

function validaValores() {
    valorA.value && valorB.value ? button.classList.add('enviar') : button.classList.remove('enviar');

    let a = Number(valorA.value);
    let b = Number(valorB.value);

    if (b > a) {
        return true
    } else {
        return false
    } 
}

form.addEventListener('submit', e => {
    e.preventDefault();
    formValido = validaValores();

    if (formValido) {
        aviso.classList.add('success')
        aviso.innerHTML = `Valor B: ${valorB.value} é maior que Valor A: ${valorA.value}`

        valorA.value = '';
        valorB.value = '';
    } else {
        aviso.classList.add('error')
        aviso.innerHTML = `Não posso validar. Valor A: ${valorA.value} é maior que Valor B: ${valorB.value}`
    }
});

form.addEventListener('keyup', e => {
    formValido = validaValores();

    if (!formValido) {
        aviso.classList.add('error')
        aviso.innerHTML = `Valor A: ${valorA.value} é maior que Valor B: ${valorB.value}, forma invalida`
    } else {
        aviso.classList.remove('error')
        aviso.innerHTML = ''
    }
})
