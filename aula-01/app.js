'use strict'

const calcular = document.getElementById('calcular')

function status(){
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const situacao = document.getElementById('situacao')
    const formulario = document.getElementById('form')

    

    if (situacao.value = (nota1 + nota2) / 2 >=5) {
        situacao.value = 'APROVADO'
        formulario.classList.add('aprovado') 
        formulario.classList.remove('reprovado')
        
    } else {
        situacao.value = 'REPROVADO'
        formulario.classList.add('reprovado')
        formulario.classList.remove('aprovado')
    }
}
calcular.addEventListener('click', status)

/*
 if (nota.value >= 5 ) {
        aluno.classList.add('aprovado') 
        aluno.classList.remove('reprovado')
    } else {
        formulario.classList.add('reprovado')
        formulario.classList.remove('aprovado')
    }
const calcular = document.getElementById('calcular')

function somar(){
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')
    const formulario = document.getElementById('form')

    resultado.value = numero1 + numero2
    formulario.classList.add('vermelho')
}

calcular.addEventListener('click', somar)
*/
