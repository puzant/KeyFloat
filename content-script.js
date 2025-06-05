/**
 * * light theme colors
 * * wrapper background: #ffffff
 * * background color: #ECECEC
 * * color: #686868
 * 
 * * dark theme colors
 * * wrapper background: #1D2228
 * * background color: #2A3139
 * * color: #DADCE0
 */


// ====== CONSTANTS ======
const languagesMap = {
  en: "English",
  ar: "Arabic",
  fr: "French"
}

const codeMap = {
  Semicolon: 'Key;',
  Quote: 'Key" "',
  BracketRight: 'Key}',
  BracketLeft: 'Key{',
  Comma: 'Key,',
  Period: 'Key.',
  Slash: 'Key/'
}

const macLayout = [
  [
    { en: 'Q', ar: [' َ', 'ض'] }, { en: 'W', ar: [' ً', 'ص'] }, { en: 'E', ar: [' ِ', 'ث'] }, 
    { en: 'R', ar: [' ٍ', 'ق'] }, { en: 'T', ar: [' ُ', 'ف'] }, { en: 'Y', ar: [' ٌ', 'غ'] }, 
    { en: 'U', ar: [' ْ', 'ع'] }, { en: 'I', ar: [' ّ', 'ه'] }, { en: 'O', ar: ['', 'خ'] }, { en: 'P', ar: ['', 'ح'] }, { en: "{", ar: ['', "ج"] }, { en: "}", ar: ['', "ة"] }
  ],
  [
    { en: 'A', ar: [ '', 'ش'] }, { en: 'S', ar: ['', 'س'] }, { en: 'D', ar: ['ي', 'ى'] }, 
    { en: 'F', ar: ['', 'ب'] }, { en: 'G', ar: ['', 'ل'] }, { en: 'H', ar: ['آ', 'ا'] }, 
    { en: 'J', ar: ['', 'ت'] }, { en: 'K', ar: ['', 'ن'] }, { en: 'L', ar: ['', 'م'] }, { en: ';', ar: ['', 'ك'] }, { en: '" "', ar: ['', '؛'] }
  ],
  [
    { en: 'Z', ar: ['', 'ظ'] }, { en: 'X', ar: ['', 'ط'] }, { en: 'C', ar: ['ئ', 'ذ'] }, 
    { en: 'V', ar: ['ء', 'د'] }, { en: 'B', ar: ['أ', 'ز'] }, { en: 'N', ar: ['إ', 'ر'] }, { en: 'M', ar: ['ؤ', 'و'] }, { en: ',', ar: ['', '،'] }, { en: '.', ar: ['', '.'] }, { en: '/', ar: ['', '/'] }
  ],
]

//  inject script into page context
const script = document.createElement('script')
script.src = chrome.runtime.getURL('injection-script.js')
script.type = 'module';
(document.head || document.documentElement).appendChild(script)
script.onload = () => script.remove();

// ====== UTILITIES ======
const createEl = (tag, options = {}) => {
  const el = document.createElement(tag)
  
  Object.entries(options).forEach(([key, value]) => {
    if (key === 'style') Object.assign(el.style, value)
    else if (key === 'classList') el.classList.add(...value)
    else if (key === 'innerHTML') el.innerHTML = value
    else el.setAttribute(key, value)
  })
  return el
}

const applyStyles = (el, styles) => Object.assign(el.style, styles)

// ===== WRAPPER RENDERING ======
function renderWrapper() {
  const existing = document.getElementById("keyboard-wrapper")
  if (existing) existing.remove()

  const shadowHost = createEl("div", {
    id: "keyboard-shadow-host",
  })
  
  document.body.appendChild(shadowHost)

  const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

  const wrapper = createEl("div", {
    id: "keyboard-wrapper",
    style: {
      width: "700px",
      position: "absolute",
      top: "20px",
      left: `${window.innerWidth - 700 - 20}px`,
      zIndex: 999999,
    }
  })

  shadowRoot.appendChild(wrapper)
  return { shadowRoot, wrapper }
}

// ====== KEYBOARD RENDERING ======
function renderKeyboard(shadowRoot, wrapper, language) {
  const existing = shadowRoot.getElementById('keyboard-box')
  if (existing) existing.remove()

  const box = createEl("div", {
    id: "keyboard-box",
    style: {
      background: "var(--key-wrapper)",
      padding: "5px 10px", 
      borderRadius: "8px", 
      zIndex: 999999
    }
  })

  const header = `
    <div style="margin: 7px 0; color: var(--key-color); display: flex; justify-content: space-between; align-items: center">
      <div style="width:220px; display: flex; align-items: center; padding: 1px 5px; font-size: 18px"> 
        <span>${language.toUpperCase()}</span> 
        <img id="language-select" style="cursor: pointer" src=${chrome.runtime.getURL("assets/arrow-down-icon-dark.svg")} />
      </div>

      <div style="display: flex; gap: 12px;">
        <img id="toggle-theme" style="cursor: pointer" src=${chrome.runtime.getURL("assets/moon-icon.svg")} />
        <img id="shutdown-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/shutdown-icon-dark.svg")} />
        <img id="collapse-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/collapse-icon-dark.svg")} />
      </div>
    </div>
  `;
  box.innerHTML = header
  wrapper.appendChild(box)

  macLayout.forEach(row => {
    const rowDiv = createEl("div", {
      style: { marginBottom: "2px", textAlign: "center", display: "flex", justifyContent: "center" }
    })

    row.forEach(key => {
      const keyContent = `
        <div style="display: flex; flex-direction: column; line-height: 1; height: 100%; justify-content: space-evenly;">
          <div style="display: flex; justify-content: space-around">
            <span>${key.en}</span>
            <span style="font-size: 22px;">${key[language]?.[0] ?? ""}</span>
          </div>
          <span style="font-size: 20px; margin: 0 18px;">${key[language]?.[1] ?? ""}</span>
        </div>
      `;

      const keyBtn = createEl("button", {
        classList: ["key"],
        innerHTML: keyContent,
        "data-key": `Key${key.en}`,
        style: {
          width: "50px", height: "50px", margin: "4px",
          fontSize: "14px", border: "none", borderRadius: "4px",
          cursor: "pointer", color: "var(--key-color)", background: "var(--key-bg)"
        }
      })

      rowDiv.appendChild(keyBtn)
    })

    box.appendChild(rowDiv)
  })

  return box
}

function renderToggleBtn(wrapper) {
  const toggleBtn = createEl("div", {
    id: "keyboard-toggle-btn",
    style: {
      position: "absolute",
      top: "0px",
      right: "0px",
      display: "flex", width: "40px", height: "40px", borderRadius: "50%",
      backgroundColor: "#333", color: "#fff", alignItems: "center", justifyContent: "center",
      cursor: "grab", zIndex: 999999
    },
    innerHTML: `<img src=${chrome.runtime.getURL("assets/keyboard-icon.svg")} />`
  })

  wrapper.appendChild(toggleBtn)
  return toggleBtn
}

// ====== EVENT LISTENERS ======
chrome.runtime.onMessage.addListener((message) => {
  if (!message.lng) return
  
  const { wrapper, shadowRoot } = renderWrapper()
  const box = renderKeyboard(shadowRoot, wrapper, message.lng)
  const toggleBtn = renderToggleBtn(wrapper)
  
  const themeToggleBtn = shadowRoot.getElementById("toggle-theme")
  const collapsdeBtn = shadowRoot.getElementById("collapse-btn")
  const lanaugeSelect = shadowRoot.getElementById("language-select")
  const shutdownBtn = shadowRoot.getElementById("shutdown-btn")

  let isDragging = false
  let dragged = false
  let offsetX = 0, offsetY = 0

  injectStyles(shadowRoot)

  function onToggleMouseDown(e) {
    e.preventDefault()
    isDragging = true
    offsetX = e.clientX - wrapper.offsetLeft
    offsetY = e.clientY - wrapper.offsetTop
    wrapper.style.cursor = 'grabbing'

    toggleBtn.classList.add("noselect")
  }

  function onMouseMove(e) {
    if (isDragging) {
      dragged = true
      wrapper.style.left = `${e.clientX - offsetX}px`
      wrapper.style.top = `${e.clientY - offsetY}px`
    }
  }

  function onMouseUp() {
    isDragging = false
    wrapper.style.cursor = 'grab'
    toggleBtn.classList.remove("noselect")
  }

  function onThemeToggleClick() {
    wrapper.classList.toggle("dark");

    const isDarkNow = wrapper.classList.contains("dark")
    themeToggleBtn.src = isDarkNow
      ? chrome.runtime.getURL("assets/sun-icon.svg")
      : chrome.runtime.getURL("assets/moon-icon.svg")

      collapsdeBtn.src = isDarkNow
      ? chrome.runtime.getURL("assets/collapse-icon.svg")
      : chrome.runtime.getURL("assets/collapse-icon-dark.svg")

      lanaugeSelect.src = isDarkNow
      ? chrome.runtime.getURL("assets/arrow-down-icon.svg")
      : chrome.runtime.getURL("assets/arrow-down-icon-dark.svg")

      shutdownBtn.src = isDarkNow
      ? chrome.runtime.getURL("assets/shutdown-icon.svg")
      : chrome.runtime.getURL("assets/shutdown-icon-dark.svg")
  }

  function onCollapseClick() {
    box.classList.add("collapsing")
    toggleBtn.classList.add("show")
    wrapper.querySelectorAll('.key.highlight').forEach(el => el.classList.remove('highlight'))
  }

  function onToggleClick(e) {
    if (dragged) {
      e.preventDefault()
      e.stopImmediatePropagation()
      dragged = false
      return
    }

    box.classList.remove("collapsing")
    toggleBtn.classList.remove("show")
  }

  function shutdown() {
    toggleBtn.removeEventListener('mousedown', onToggleMouseDown)
    shadowRoot.removeEventListener('mousemove', onMouseMove)
    shadowRoot.removeEventListener('mouseup', onMouseUp)
    themeToggleBtn.removeEventListener('click', onThemeToggleClick)
    collapsdeBtn.removeEventListener('click', onCollapseClick)
    toggleBtn.removeEventListener('click', onToggleClick)

    const keyboardShadowHost = document.querySelector("#keyboard-shadow-host")
    keyboardShadowHost.remove()
  }

  toggleBtn.addEventListener('mousedown', onToggleMouseDown)
  shadowRoot.addEventListener('mousemove', onMouseMove)
  shadowRoot.addEventListener('mouseup', onMouseUp)
  themeToggleBtn.addEventListener('click', onThemeToggleClick)
  collapsdeBtn.addEventListener('click', onCollapseClick)
  toggleBtn.addEventListener('click', onToggleClick)
  shutdownBtn.addEventListener('click', shutdown)
})

window.addEventListener('FROM_INJECTED_KEYDOWN', (e) => {
  const keyboardShadowHost = document.querySelector("#keyboard-shadow-host")
  const shadowRoot = keyboardShadowHost.shadowRoot
  const { code } = e.detail

  const pressedKey = codeMap[code] || code;
  shadowRoot.querySelectorAll('.key.highlight').forEach(el => el.classList.remove('highlight'))
  
  const btn = shadowRoot.querySelector(`.key[data-key="${pressedKey}"]`)
  
  if (btn) {
    btn.classList.add('highlight', 'pressed')
    
    btn.addEventListener('animationend', () => {
      btn.classList.remove('pressed')
    }, { once: true });
  }
});

// ====== INJECT STYLES ======
function injectStyles(shadowRoot) {
  const style = createEl('style', {
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
    `
  })
  
  shadowRoot.appendChild(style)
  
}