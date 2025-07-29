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
			<style>
        #keyboard-wrapper {
          width: 700px;
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 999999;
          background: var(--key-wrapper, #fff);
          border-radius: 8px;
          padding: 10px;
        }
      </style>

      <div id="keyboard-wrapper">
        <div id="keyboard-header-slot"></div>
        <div id="keyboard-rows-slot"></div>
      </div>
		`
	}
}

customElements.define('main-keyboard', MainKeyboard)