export class MainKeyboard extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' })
	}

	connectedCallback() {
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `
      <div id="keyboard-wrapper">
        <div id="keyboard-header-slot"></div>
        <div id="keyboard-rows-slot"></div>
      </div>
		`
	}
}

customElements.define('main-keyboard', MainKeyboard)