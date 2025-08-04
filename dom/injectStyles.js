import createEl from "./createElement";

// ====== INJECT STYLES ======
const injectStyles = (shadowRoot) => {
  const style = createEl("style", {
    innerHTML: `
      :host {
        --key-wrapper: #C8CDD1;
        --key-bg: #ECECEC;
        --key-color: #000;
        --key-bg-highlight: #111111;
        --key-color-highlight: #ffffff;
      }

      #keyboard-wrapper.dark {
        --key-wrapper: #1D2228;
        --key-bg: #2A3139;
        --key-color: #DADCE0;
        --key-bg-highlight: #FFFFFF;
        --key-color-highlight: #3C4043;
      }

      .key.highlight {
        background-color: var(--key-bg-highlight) !important;
        color: var(--key-color-highlight) !important;
      }

      @keyframes pressAnimation {
        0% { transform: scale(1); box-shadow: 0 0 10px #FFFFFF; }
        50% { transform: scale(0.9); box-shadow: 0 0 5px #FFFFFF; }
        100% { transform: scale(1); box-shadow: 0 0 10px #FFFFFF; }
      }

      .key.pressed {
        animation: pressAnimation 0.2s ease;
      }

      #keyboard-box {
        transition: transform 0.4s ease, opacity 0.4s ease, background-color 0.3s ease, color 0.3s ease;
        transform-origin: top right;
      }

      #keyboard-box.collapsing {
        transform: scale(0);
        opacity: 0;
        pointer-events: none;
      }

      #keyboard-toggle-btn {
        transition: transform 0.4s ease, opacity 0.4s ease;
        transform: scale(0);
        opacity: 0;
        pointer-events: none;
      }

       #keyboard-toggle-btn.show {
        transform: scale(1);
        opacity: 1;
        pointer-events: all;
      }

      .noselect {
        user-select: none;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+ */
      }
    `,
  });

  shadowRoot.appendChild(style);
}

export default injectStyles