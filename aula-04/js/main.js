'use strict'
import { pesquisarCep } from "./viacep.js"
import { pesquisarCepPostman } from "./postmon.js"


// console.log(pesquisarCep)
// pesquisarCep('06703320')




const preencherFormulario = async() => {
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarPostman(cepDigitado)
    document.getElementById('endereco').value = cep.logradouro
    document.getElementById('bairro').value = cep.bairro
    document.getElementById('cidade').value = cep.municipio
    document.getElementById('estado').value = cep.estado
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)

