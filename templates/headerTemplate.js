const headerTemplate = document.createElement("template")
headerTemplate.innerHTML = `
  <style>
    .keyboard-header {
      margin: 7px 0;
      color: var(--key-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .keyboard-header span {
      font-size: 18px;
    }

    .keyboard-controls {
      display: flex; 
      gap: 12px;
    }

    .keyboard-controls img {
      cursor: pointer;
    }

  </style>

  <div class="keyboard-header">
    <span id="selected-lang"></span>

    <div class="keyboard-controls">
      <img id="toggle-theme" src=${chrome.runtime.getURL("assets/moon-icon.svg")} />
      <img id="shutdown-btn" src=${chrome.runtime.getURL("assets/shutdown-icon-dark.svg")} />
      <img id="collapse-btn" src=${chrome.runtime.getURL("assets/collapse-icon-dark.svg")} />
    </div>
  </div>
`

export default headerTemplate