export class MainKeyboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
			<style>
				#keyboard-wrapper {
					width: 700px;
					position: absolute;
					top: 20px;
					left: ${window.innerWidth - 700 - 20}px;
					z-index: 999999;
					will-change: transform;
				}

				#keyboard-box {
					background: var(--key-wrapper);
					padding: 5px 10px;
					border-radius: 8px;
					z-index: 999999;
					transition: transform 0.4s ease, opacity 0.4s ease, background-color 0.3s ease, color 0.3s ease;
					transform-origin: top right;
				}

				#keyboard-box.collapsing {
        	transform: scale(0);
        	opacity: 0;
        	pointer-events: none;
      	}
			</style>

      <div id="keyboard-wrapper">
				<div id="keyboard-box">
        	<keyboard-header></keyboard-header>
				</div>
      </div>
		`;
  }
}

customElements.define("main-keyboard", MainKeyboard);
