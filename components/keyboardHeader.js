export class KeyboardHeader extends HTMLElement {
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
				#header-container {
					margin: 7px 0;
					color: var(--key-color);
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.lang-display {
					font-size: 18px;
				}

				#controls-container {
					display: flex;
					gap: 12px;
				}

				#toggle-theme,
				#shutdown-btn,
				#collapse-btn {
					cursor: pointer;
				}
			</style>

			<div id="header-container">
				<span class="lang-display" style="font-size: 18px;">${getLanguageName(language)}</span> 
				
				<div id="controls-container">
        	<img src=${chrome.runtime.getURL("assets/moon-icon.svg")} />
        	<img src=${chrome.runtime.getURL("assets/shutdown-icon-dark.svg")} />
        	<img src=${chrome.runtime.getURL("assets/collapse-icon-dark.svg")} />
      	</div>
			</div>
		`;
  }
}

customElements.define("keyboard-header", KeyboardHeader);
