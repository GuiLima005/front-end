'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class="items"></div>'
// }

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.classList.add('nota')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2> <h1 class="nota__title">${nota}</h1>`

    container.appendChild(novaDiv)

    if (nota > 5) {
        novaDiv.classList.add('aprovado')
        
    } else if (nota <= 5) {
        novaDiv.classList.add('reprovado')
    }
}

const handleClick = () => {
    const nomeAluno = prompt('Digite o nome do aluno')
    const nota = prompt('Digite a nota do aluno')

    if (nota > 10) {
        alert('ERRO')

    } else if (isNaN(nota)) {
        alert('ERRO')

    } else if (nota < 0) {
        alert('ERRO')

    } else if (nota == "" || nomeAluno == "") {
        alert('ERRO')

    } else
        adicionarCard(nomeAluno, nota)
}


adicionar.addEventListener('click', handleClick)