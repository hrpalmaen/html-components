class PopuelinOne extends HTMLElement {
    constructor () {
        super()
        const shadow = this.attachShadow({ mode: 'open' })
        // create elements
        const $divContainer = document.createElement('div')
        const $divHeader = document.createElement('div')
        const $divBody = document.createElement('div')
        const style = document.createElement('style')
        // add atributes for elements
        $divContainer.setAttribute('class', 'container')
        $divHeader.setAttribute('class', 'container-header')
        $divBody.setAttribute('class', 'container-body')
        style.textContent = `
            .container {
                border: 1px solid rgb(137, 219, 230);
                border-radius: 5px;
                box-shadow: rgb(70, 105, 102) 1px 1px;
                height: 200px;
                width: 250px;
            }
            .container-header {
                text-align: center;            
                font-size: 1.5rem;
            }
            .container-body {
                font-size: 1.1rem;
            }
        `
        // add variables
        const title = this.getAttribute('title')
        const text = this.getAttribute('text')

        $divContainer.appendChild($divHeader)
        $divContainer.appendChild($divBody)

        $divHeader.innerHTML = title
        $divBody.innerHTML = text

        shadow.appendChild($divContainer)
        shadow.appendChild(style)
    }
}

customElements.define('popuelin-one', PopuelinOne)