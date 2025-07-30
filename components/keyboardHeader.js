export class KeyboardHeader extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
	}

	static get observedAttributes() {
		return ['language', 'theme']
	}	
}

