export class KeyboardHeader extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
	}	

	connectedCallback() {
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `
			<style>
			
			</style>

			<div>
				<span style="font-size: 18px;">${getLanguageName(language)}</span> 
				
				<div style="display: flex; gap: 12px;">
        	<img id="toggle-theme" style="cursor: pointer" src=${chrome.runtime.getURL("assets/moon-icon.svg")} />
        	<img id="shutdown-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/shutdown-icon-dark.svg")} />
        	<img id="collapse-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/collapse-icon-dark.svg")} />
      	</div>
			</div>
		`
	}
}

