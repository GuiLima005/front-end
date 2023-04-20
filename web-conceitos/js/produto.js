'use strict'

class produto extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode:'open'})
        this.foto = null

    }

    static get observedAttributes () {
        return['foto']
    }

    attributesChangedCallback(nameAttr, oldValue, NewValue) {
        this[nameAttr] = NewValue
    }

    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())

    }

    styles() {
        const css = document.createElement('style')
        css.textContent = `
        .card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
            border: 1px solid #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 8px #0006;
            padding: 10px;
            cursor: pointer;
        }
        
        .card:hover{
            box-shadow: 0px 0px 8px #00f7;
        }
        .card__image{
            width: 200px;
            height: 200px;
            background-image: url(${this.foto});
            background-size: cover;

        }
        .card__title{
            font-size: 1.5rem;
        }
        .card__description{
            font-size: 1rem;
            text-align: justify;
        }
        .card__price{
            width: 100%;
            font-size: 1.7rem;
            font-weight: 900;
        }
        `
        return css
    }

    component() {
  
        const card = document.createElement('div')
        card.classList.add('card')
    
        const img = document.createElement('img')
        img.classList.add('card__image')
    
        const titulo = document.createElement('h5')
        titulo.classList.add('card__title')
        titulo.textContent = 'Nome do Produto'
    
        const descricao = document.createElement('p')
        descricao.classList.add('card__description')
        descricao.textContent = 'Descrição do Produto'
    
        const preco = document.createElement('p')
        preco.classList.add('card__price')
        preco.textContent = 'Preço do Produto'
    
        card.append(img, titulo, descricao, preco)
    
        return card

    }

}

customElements.define('produto-lima', produto)