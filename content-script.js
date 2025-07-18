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

const numbersWindowsLayout = [
  { num: "`", ar: [" ّ", "ذ"], fr: ["²"], sp: [], am: [], keyCode: "Backquote" },
  { num: "1", ar: [], fr: ["&"], sp: [], am: ["է"], keyCode: "Digit1" },
  { num: "2", ar: [], fr: ["é"], sp: [], am: ["թ"], keyCode: "Digit2" },
  { num: "3", ar: [], fr: [""], sp: [], am: ["փ"], keyCode: "Digit3" },
  { num: "4", ar: [], fr: ["'"], sp: [], am: ["ձ"], keyCode: "Digit4" },
  { num: "5", ar: [], fr: [""], sp: [], am: ["ջ"], keyCode: "Digit5" },
  { num: "6", ar: [], fr: ["-"], sp: [], am: ["ւ"], keyCode: "Digit6" },
  { num: "7", ar: [], fr: ["è"], sp: [], am: ["և"], keyCode: "Digit7" },
  { num: "8", ar: [], fr: ["_"], sp: [], am: ["ր"], keyCode: "Digit8" },
  { num: "9", ar: [], fr: ["ç"], sp: [], am: ["չ"], keyCode: "Digit9" },
  { num: "0", ar: [], fr: ["à"], sp: [], am: ["ճ"], keyCode: "Digit0" },
];

const windowsLayout = [
  [
    { en: "Q", ar: ["َ", "ض"], fr: ["", "A"], sp: ["", "Q"], am: ["", "ք"], eventName: "KeyQ" }, // Fatha
    { en: "W", ar: ["ً", "ص"], fr: ["", "Z"], sp: ["", "W"], am: ["", "ո"], eventName: "KeyW" }, // Tanwin Fatha
    { en: "E", ar: ["ُ", "ث"], fr: ["", "E"], sp: ["", "E"], am: ["", "ե"], eventName: "KeyE" }, // Damma
    { en: "R", ar: ["ٌ", "ق"], fr: ["", "R"], sp: ["", "R"], am: ["", "ռ"], eventName: "KeyR" }, // Tanwin Damma
    { en: "T", ar: ["لإ", "ف"], fr: ["", "T"], sp: ["", "T"], am: ["", "տ"], eventName: "KeyT" }, // Kasra
    { en: "Y", ar: ["إ", "غ"], fr: ["", "Y"], sp: ["", "Y"], am: ["", "ը"], eventName: "KeyY" }, // Tanwin Kasra
    { en: "U", ar: ["‘", "ع"], fr: ["", "U"], sp: ["", "U"], am: ["", "ւ"], eventName: "KeyU" }, // Sukun
    { en: "I", ar: ["", "ه"], fr: ["", "I"], sp: ["", "I"], am: ["", "ի"], eventName: "KeyI" },
    { en: "O", ar: ["", "خ"], fr: ["", "O"], sp: ["", "O"], am: ["", "օ"], eventName: "KeyO" },
    { en: "P", ar: ["", "ح"], fr: ["", "P"], sp: ["", "P"], am: ["", "պ"], eventName: "KeyP" },
    { en: "[", ar: ["", "ج"], fr: ["¨", "^"], sp: ["", "`"], am: ["", "խ"], eventName: "BracketLeft" },
    { en: "]", ar: ["", "د"], fr: ["£", "$"], sp: ["", "+"], am: ["", "ծ"], eventName: "BracketRight" },
  ],
  [
    { en: "A", ar: [" ِ", "ش"], fr: ["", "Q"], sp: ["", "A"], am: ["", "ա"], eventName: "KeyA" }, // Tatwil
    { en: "S", ar: [" ٍ", "س"], fr: ["", "S"], sp: ["", "S"], am: ["", "ս"], eventName: "KeyS" },
    { en: "D", ar: ["", "ي"], fr: ["", "D"], sp: ["", "D"], am: ["", "դ"], eventName: "KeyD" },
    { en: "F", ar: ["", "ب"], fr: ["", "F"], sp: ["", "F"], am: ["", "ֆ"], eventName: "KeyF" },
    { en: "G", ar: ["لأ", "ل"], fr: ["", "G"], sp: ["", "G"], am: ["", "գ"], eventName: "KeyG" },
    { en: "H", ar: ["أ", "ا"], fr: ["", "H"], sp: ["", "H"], am: ["", "հ"], eventName: "KeyH" },
    { en: "J", ar: ["", "ت"], fr: ["", "J"], sp: ["", "J"], am: ["", "յ"], eventName: "KeyJ" },
    { en: "K", ar: ["", "ن"], fr: ["", "K"], sp: ["", "K"], am: ["", "կ"], eventName: "KeyK" },
    { en: "L", ar: ["", "م"], fr: ["", "L"], sp: ["", "L"], am: ["", "լ"], eventName: "KeyL" },
    { en: ";", ar: ["ك", "ك"], fr: ["", "M"], sp: ["", "ñ"], am: ["", ";"], eventName: "Semicolon" }, // Shift doesn't change
    { en: "'", ar: ["ط", "ط"], fr: ["%", "ù"], sp: ["", "´"], am: ["", "՛"], eventName: "Quote" }, // Same
  ],
  [
    { en: "Z", ar: ["", "ئ"], fr: ["", "W"], sp: ["", "Z"], am: ["", "զ"], eventName: "KeyZ" }, // Shifted seems to be Kasra (historically), but can be left blank
    { en: "X", ar: [" ْ", "ء"], fr: ["", "X"], sp: ["", "X"], am: ["", "ղ"], eventName: "KeyX" },
    { en: "C", ar: ["", "ؤ"], fr: ["", "C"], sp: ["", "C"], am: ["", "ց"], eventName: "KeyC" },
    { en: "V", ar: ["", "ر"], fr: ["", "V"], sp: ["", "V"], am: ["", "վ"], eventName: "KeyV" },
    { en: "B", ar: ["لآ", "لا"], fr: ["", "B"], sp: ["", "B"], am: ["", "բ"], eventName: "KeyB" },
    { en: "N", ar: ["آ", "ى"], fr: ["", "N"], sp: ["", "N"], am: ["", "ն"], eventName: "KeyN" },
    { en: "M", ar: ["", "ة"], fr: ["?", ","], sp: ["", "M"], am: ["", "մ"], eventName: "KeyM" },
    { en: ",", ar: ["", "و"], fr: [".", ";"], sp: ["", ","], am: ["", ","], eventName: "Comma" },
    { en: ".", ar: ["", "ز"], fr: ["/", ":"], sp: ["", "."], am: ["", ":"], eventName: "Period" },
    { en: "/", ar: ["؟", "ظ"], fr: ["§", "!"], sp: ["", "-"], am: ["", "/"], eventName: "Slash" }, // Arabic question mark
  ],
];

const numbersMacLayout = [
  { num: "`", ar: [], fr: ["#"], sp: [], am: [""], keyCode: "Backquote" },
  { num: "1", ar: [], fr: ["&"], sp: [], am: ["։"], keyCode: "Digit1" },
  { num: "2", ar: [], fr: ["é"], sp: [], am: ["ձ"], keyCode: "Digit2" },
  { num: "3", ar: [], fr: [""], sp: [], am: ["յ"], keyCode: "Digit3" },
  { num: "4", ar: [], fr: ["'"], sp: [], am: ["՛"], keyCode: "Digit4" },
  { num: "5", ar: [], fr: [""], sp: [], am: [","], keyCode: "Digit5" },
  { num: "6", ar: [], fr: ["§"], sp: [], am: ["-"], keyCode: "Digit6" },
  { num: "7", ar: [], fr: ["è"], sp: [], am: ["."], keyCode: "Digit7" },
  { num: "8", ar: [], fr: ["!"], sp: [], am: ["«"], keyCode: "Digit8" },
  { num: "9", ar: [], fr: ["ç"], sp: [], am: ["»"], keyCode: "Digit9" },
  { num: "0", ar: [], fr: ["à"], sp: [], am: ["օ"], keyCode: "Digit0" },
];

const macLayout = [
  [
    { en: "Q", ar: [" َ", "ض"], fr: ["", "A"], sp: ["", "Q"], am: ["", "խ"], eventName: "KeyQ" },
    { en: "W", ar: [" ً", "ص"], fr: ["", "Z"], sp: ["", "W"], am: ["", "վ"], eventName: "KeyW" },
    { en: "E", ar: [" ِ", "ث"], fr: ["", "E"], sp: ["", "E"], am: ["", "է"], eventName: "KeyE" },
    { en: "R", ar: [" ٍ", "ق"], fr: ["", "R"], sp: ["", "R"], am: ["", "ր"], eventName: "KeyR" },
    { en: "T", ar: [" ُ", "ف"], fr: ["", "T"], sp: ["", "T"], am: ["", "դ"], eventName: "KeyT" },
    { en: "Y", ar: [" ٌ", "غ"], fr: ["", "Y"], sp: ["", "Y"], am: ["", "ե"], eventName: "KeyY" },
    { en: "U", ar: [" ْ", "ع"], fr: ["", "U"], sp: ["", "U"], am: ["", "ը"], eventName: "KeyU" },
    { en: "I", ar: [" ّ", "ه"], fr: ["", "I"], sp: ["", "I"], am: ["", "ի"], eventName: "KeyI" },
    { en: "O", ar: ["", "خ"], fr: ["", "O"], sp: ["", "O"], am: ["", "ո"], eventName: "KeyO" },
    { en: "P", ar: ["", "ح"], fr: ["", "P"], sp: ["", "P"], am: ["", "բ"], eventName: "KeyP" },
    { en: "{", ar: ["", "ج"], fr: ["", "^"], sp: ["", "´"], am: ["", "չ"], eventName: "BracketLeft" },
    { en: "}", ar: ["", "ة"], fr: ["", "$"], sp: ["", "+"], am: ["", "ջ"], eventName: "BracketRight" },
  ],
  [
    { en: "A", ar: ["", "ش"], fr: ["", "Q"], sp: ["", "A"], am: ["", "ա"], eventName: "KeyA" },
    { en: "S", ar: ["", "س"], fr: ["", "S"], sp: ["", "S"], am: ["", "ս"], eventName: "KeyS" },
    { en: "D", ar: ["ى", "ي"], fr: ["", "D"], sp: ["", "D"], am: ["", "տ"], eventName: "KeyD" },
    { en: "F", ar: ["", "ب"], fr: ["", "F"], sp: ["", "F"], am: ["", "ֆ"], eventName: "KeyF" },
    { en: "G", ar: ["", "ل"], fr: ["", "G"], sp: ["", "G"], am: ["", "կ"], eventName: "KeyG" },
    { en: "H", ar: ["آ", "ا"], fr: ["", "H"], sp: ["", "H"], am: ["", "հ"], eventName: "KeyH" },
    { en: "J", ar: ["", "ت"], fr: ["", "J"], sp: ["", "J"], am: ["", "ճ"], eventName: "KeyJ" },
    { en: "K", ar: ["", "ن"], fr: ["", "K"], sp: ["", "K"], am: ["", "ք"], eventName: "KeyK" },
    { en: "L", ar: ["", "م"], fr: ["", "L"], sp: ["", "L"], am: ["", "լ"], eventName: "KeyL" },
    { en: ";", ar: ["", "ك"], fr: ["", "M"], sp: ["", "ñ"], am: ["", "թ"], eventName: "Semicolon" },
    { en: "\u200B", ar: ["", "؛"], fr: ["%", "ù"], sp: ["", "{"], am: ["", "փ"], eventName: "Quote" },
  ],
  [
    { en: "Z", ar: ["", "ظ"], fr: ["", "W"], sp: ["", "Z"], am: ["", "զ"], eventName: "KeyZ" },
    { en: "X", ar: ["", "ط"], fr: ["", "X"], sp: ["", "X"], am: ["", "ց"], eventName: "KeyX" },
    { en: "C", ar: ["ئ", "ذ"], fr: ["", "C"], sp: ["", "C"], am: ["", "գ"], eventName: "KeyC" },
    { en: "V", ar: ["ء", "د"], fr: ["", "V"], sp: ["", "V"], am: ["", "ւ"], eventName: "KeyV" },
    { en: "B", ar: ["أ", "ز"], fr: ["", "B"], sp: ["", "B"], am: ["", "պ"], eventName: "KeyB" },
    { en: "N", ar: ["إ", "ر"], fr: ["", "N"], sp: ["", "N"], am: ["", "ն"], eventName: "KeyN" },
    { en: "M", ar: ["ؤ", "و"], fr: ["?", ","], sp: ["", "M"], am: ["", "մ"], eventName: "KeyM" },
    { en: ",", ar: ["", "،"], fr: ["", ";"], sp: ["", ","], am: ["", "շ"], eventName: "Comma" },
    { en: ".", ar: ["", "."], fr: ["/", ":"], sp: ["", "."], am: ["", "ղ"], eventName: "Period" },
    { en: "/", ar: ["", "/"], fr: ["+", "="], sp: ["", "-"], am: ["", "ծ"], eventName: "Slash" },
  ],
];

//  inject script into page context
const script = document.createElement("script");
script.src = chrome.runtime.getURL("injection-script.js");
script.type = "module";
(document.head || document.documentElement).appendChild(script);
script.onload = () => script.remove();

const SOUND_POOL_SIZE = 5;
const clickSounds = [];
let currentSoundIndex = 0;

let wrapperX = 0,
  wrapperY = 0;

let mouseX = 0,
  mouseY = 0;

let offsetX = 0,
  offsetY = 0;

let themeToggleBtn, toggleBtn, collapsdeBtn, shutdownBtn, box;
let shadowRoot, wrapper;
let isDragging = false,
  dragged = false;

for (let i = 0; i < SOUND_POOL_SIZE; i++) {
  const sound = new Audio(chrome.runtime.getURL("assets/key-press-sound.mp3"));
  sound.preload = "auto";
  clickSounds.push(sound);
}

function playClickSound() {
  const sound = clickSounds[currentSoundIndex];
  sound.pause();
  sound.currentTime = 0;
  sound.play();

  currentSoundIndex = (currentSoundIndex + 1) % SOUND_POOL_SIZE;
}

// ====== UTILITIES ======
const createEl = (tag, options = {}) => {
  const el = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    if (key === "style") Object.assign(el.style, value);
    else if (key === "classList") el.classList.add(...value);
    else if (key === "innerHTML") el.innerHTML = value;
    else el.setAttribute(key, value);
  });
  return el;
};

function getLanguageName(lang) {
  const languages = {
    ar: "العربية",
    fr: "Français",
    sp: "Español",
    am: "հաերեն",
  };

  return languages[lang];
}

// ===== WRAPPER RENDERING ======
function renderWrapper() {
  const existing = document.getElementById("keyboard-shadow-host");
  if (existing) existing.remove();

  const shadowHost = createEl("div", {
    id: "keyboard-shadow-host",
  });

  document.body.appendChild(shadowHost);

  shadowRoot = shadowHost.attachShadow({ mode: "open" });

  wrapper = createEl("div", {
    id: "keyboard-wrapper",
    style: {
      width: "700px",
      position: "absolute",
      top: "20px",
      left: `${window.innerWidth - 700 - 20}px`,
      zIndex: 999999,
      willChange: "transform",
    },
  });

  shadowRoot.appendChild(wrapper);
  return { shadowRoot, wrapper };
}

// ====== KEYBOARD RENDERING ======
function renderKeyboard(language) {
  const existing = shadowRoot.getElementById("keyboard-box");
  if (existing) existing.remove();

  const numbersLayout = navigator.userAgentData.platform.includes("macOS") ? numbersMacLayout : numbersWindowsLayout;
  const layout = navigator.userAgentData.platform.includes("macOS") ? macLayout : windowsLayout;

  box = createEl("div", {
    id: "keyboard-box",
    style: {
      background: "var(--key-wrapper)",
      padding: "5px 10px",
      borderRadius: "8px",
      zIndex: 999999,
    },
  });

  const header = `
    <div style="margin: 7px 0; color: var(--key-color); display: flex; justify-content: space-between; align-items: center">
      <span style="font-size: 18px;">${getLanguageName(language)}</span> 

      <div style="display: flex; gap: 12px;">
        <img id="toggle-theme" style="cursor: pointer" src=${chrome.runtime.getURL("assets/moon-icon.svg")} />
        <img id="shutdown-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/shutdown-icon-dark.svg")} />
        <img id="collapse-btn" style="cursor: pointer" src=${chrome.runtime.getURL("assets/collapse-icon-dark.svg")} />
      </div>
    </div>
  `;
  box.innerHTML = header;
  wrapper.appendChild(box);

  const numbersRows = createEl("div", {
    id: "numbers-row",
    style: {
      textAlign: "center",
    },
  });

  numbersLayout.forEach((element) => {
    const numberKeyContent = `
        <div style="display: flex; justify-content: space-between">
          <span>${element.num}</span>
          <span>${element[language].join(" ") ?? ""}</span>
        </div>
      `;

    const numberBtn = createEl("button", {
      id: "number-btn",
      innerHTML: numberKeyContent,
      "data-key": element.keyCode,
      classList: ["key"],
      style: {
        width: "50px",
        margin: "4px",
        fontSize: "17px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        color: "var(--key-color)",
        background: "var(--key-bg)",
      },
    });

    numbersRows.appendChild(numberBtn);
  });

  box.appendChild(numbersRows);

  layout.forEach((row) => {
    const rowDiv = createEl("div", {
      style: { marginBottom: "2px", textAlign: "center", display: "flex", justifyContent: "center" },
    });

    row.forEach((key) => {
      const keyContent = `
        <div style="display: flex; flex-direction: column; line-height: 1; height: 100%; justify-content: space-evenly;">
          <div style="display: flex; justify-content: space-between">
            <span>${key.en}</span>
            <span style="font-size: 22px;">${key[language]?.[0] ?? ""}</span>
          </div>
          <span style="font-size: 20px; text-align: right">${key[language]?.[1] ?? ""}</span>
        </div>
      `;

      const keyBtn = createEl("button", {
        classList: ["key"],
        innerHTML: keyContent,
        "data-key": key.eventName,
        style: {
          width: "50px",
          height: "50px",
          margin: "4px",
          fontSize: "14px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          color: "var(--key-color)",
          background: "var(--key-bg)",
        },
      });

      rowDiv.appendChild(keyBtn);
    });

    box.appendChild(rowDiv);
  });

  return box;
}

function renderToggleBtn(wrapper) {
  const toggleBtn = createEl("div", {
    id: "keyboard-toggle-btn",
    style: {
      position: "absolute",
      top: "0px",
      right: "0px",
      display: "flex",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#333",
      color: "#fff",
      alignItems: "center",
      justifyContent: "center",
      cursor: "grab",
      zIndex: 999999,
    },
    innerHTML: `<img src=${chrome.runtime.getURL("assets/keyboard-icon.svg")} />`,
  });

  wrapper.appendChild(toggleBtn);
  return toggleBtn;
}

function keyboardBuilder(message) {
  renderWrapper();
  box = renderKeyboard(message.payload.lng);
  toggleBtn = renderToggleBtn(wrapper);

  themeToggleBtn = shadowRoot.getElementById("toggle-theme");
  collapsdeBtn = shadowRoot.getElementById("collapse-btn");
  shutdownBtn = shadowRoot.getElementById("shutdown-btn");

  injectStyles(shadowRoot);

  toggleBtn.addEventListener("mousedown", onToggleMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  themeToggleBtn.addEventListener("click", onThemeToggleClick);
  collapsdeBtn.addEventListener("click", onCollapseClick);
  toggleBtn.addEventListener("click", onToggleClick);
  shutdownBtn.addEventListener("click", shutdown);
}

function updatePosition() {
  if (isDragging) {
    wrapperX = mouseX - offsetX;
    wrapperY = mouseY - offsetY;

    wrapper.style.transform = `translate(${wrapperX}px, ${wrapperY}px)`;
    requestAnimationFrame(updatePosition);
  }
}

function onToggleMouseDown(e) {
  e.preventDefault();
  isDragging = true;
  offsetX = e.clientX - wrapperX;
  offsetY = e.clientY - wrapperY;
  mouseX = e.clientX;
  mouseY = e.clientY;

  toggleBtn.classList.add("noselect");
  requestAnimationFrame(updatePosition);
}

function onMouseMove(e) {
  if (isDragging) {
    dragged = true;
    mouseX = e.clientX;
    mouseY = e.clientY;
    wrapper.style.cursor = "grabbing";
  }
}

function onMouseUp() {
  isDragging = false;
  wrapper.style.cursor = "grab";
  toggleBtn.classList.remove("noselect");
}

function onThemeToggleClick() {
  wrapper.classList.toggle("dark");

  const isDarkNow = wrapper.classList.contains("dark");
  themeToggleBtn.src = isDarkNow
    ? chrome.runtime.getURL("assets/sun-icon.svg")
    : chrome.runtime.getURL("assets/moon-icon.svg");

  collapsdeBtn.src = isDarkNow
    ? chrome.runtime.getURL("assets/collapse-icon.svg")
    : chrome.runtime.getURL("assets/collapse-icon-dark.svg");

  shutdownBtn.src = isDarkNow
    ? chrome.runtime.getURL("assets/shutdown-icon.svg")
    : chrome.runtime.getURL("assets/shutdown-icon-dark.svg");
}

function onCollapseClick() {
  box.classList.add("collapsing");
  toggleBtn.classList.add("show");
  wrapper.querySelectorAll(".key.highlight").forEach((el) => el.classList.remove("highlight"));
}

function onToggleClick(e) {
  if (dragged) {
    e.preventDefault();
    e.stopImmediatePropagation();
    dragged = false;
    return;
  }

  box.classList.remove("collapsing");
  toggleBtn.classList.remove("show");
}

function shutdown() {
  toggleBtn.removeEventListener("mousedown", onToggleMouseDown);
  shadowRoot.removeEventListener("mousemove", onMouseMove);
  shadowRoot.removeEventListener("mouseup", onMouseUp);
  themeToggleBtn.removeEventListener("click", onThemeToggleClick);
  collapsdeBtn.removeEventListener("click", onCollapseClick);
  toggleBtn.removeEventListener("click", onToggleClick);

  const keyboardShadowHost = document.querySelector("#keyboard-shadow-host");
  keyboardShadowHost.remove();
  chrome.storage.local.set({ keyboardEnabled: false, soundEnabled: false, opacityLevel: 100 });
}

// ====== EVENT LISTENERS ======
chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "LANG_CHANGE":
      keyboardBuilder(message);
      break;

    case "KEYBOARD_OPEN":
      keyboardBuilder(message);
      break;

    case "KEYBOARD_CLOSE":
      shutdown();
      break;

    case "UPDATE_VISIBILITY":
      const keyboardBox = shadowRoot.getElementById("keyboard-box");
      keyboardBox.style.opacity = message.payload.opacityLevel / 100;
      break;
  }
});

window.addEventListener("FROM_INJECTED_KEYDOWN", (e) => {
  const { code } = e.detail;
  const pressedKey = code;

  shadowRoot.querySelectorAll(".key.highlight").forEach((el) => el.classList.remove("highlight"));

  const btn = shadowRoot.querySelector(`.key[data-key="${pressedKey}"]`);

  if (btn) {
    btn.classList.add("highlight", "pressed");
    btn.addEventListener(
      "animationend",
      () => {
        btn.classList.remove("pressed");

        chrome.storage.local.get(["soundEnabled"], (result) => {
          if (result.soundEnabled) playClickSound();
        });
      },
      { once: true }
    );
  }
});

// ====== INJECT STYLES ======
function injectStyles(shadowRoot) {
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
