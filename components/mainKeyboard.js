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
					left: `${window.innerWidth - 700 - 20}px`;
					z-index: 999999;
					will-change: transform;
				}

				#keyboard-box {
					background: var(--key-wrapper);
					padding: 5px 10px;
					border-radius: 8px;
					z-index: 999999;
				}
			</style>

      <div id="keyboard-wrapper">
				<div id="keyboard-box">
        	<div id="keyboard-header-slot"></div>
        	<div id="keyboard-rows-slot"></div>
				</div>
      </div>
		`
	}
}

customElements.define('main-keyboard', MainKeyboard)