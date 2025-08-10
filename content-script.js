import injectStyles from "./dom/injectStyles";
import createEl from "./dom/createElement";
import playClickSound from "./sound";
import { getLanguageName } from "./utils";
import { state } from "./state";

import headerTemplate from "./templates/headerTemplate";
import buttonTemplate from "./templates/buttonTemplate";
import numberButtonTemplate from "./templates/numberButtonTemplate";

//  inject script into page context
const script = document.createElement("script");
script.src = chrome.runtime.getURL("injection-script.js");
script.type = "module";
(document.head || document.documentElement).appendChild(script);
script.onload = () => script.remove();

let themeToggleBtn, toggleBtn, collapsdeBtn, shutdownBtn, box;
let shadowRoot, wrapper;

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
function renderKeyboard(language, numbersLayout, layout) {
  const existing = shadowRoot.getElementById("keyboard-box");
  if (existing) existing.remove();

  box = createEl("div", {
    id: "keyboard-box",
    style: {
      background: "var(--key-wrapper)",
      padding: "5px 10px",
      borderRadius: "8px",
      zIndex: 999999,
    },
  });

  const headerNode = headerTemplate.content.cloneNode(true);
  headerNode.getElementById("selected-lang").textContent = getLanguageName(language);

  box.appendChild(headerNode);
  wrapper.appendChild(box);

  const numbersRows = createEl("div", {
    id: "numbers-row",
    style: {
      textAlign: "center",
    },
  });

  numbersLayout.forEach((element) => {
    const numberButtonNode = numberButtonTemplate.content.cloneNode(true);

    numberButtonNode.querySelector(".container > span:first-child").textContent = element.num;
    numberButtonNode.querySelector(".container > span:nth-child(2)").textContent = element[language].join(" ");

    const numberBtn = createEl("button", {
      id: "number-btn",
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

    numberBtn.appendChild(numberButtonNode);
    numbersRows.appendChild(numberBtn);
  });

  box.appendChild(numbersRows);

  layout.forEach((row) => {
    const rowDiv = createEl("div", {
      style: { marginBottom: "2px", textAlign: "center", display: "flex", justifyContent: "center" },
    });

    row.forEach((key) => {
      const buttonNode = buttonTemplate.content.cloneNode(true);

      buttonNode.querySelector(".english-letter").textContent = key.en;
      buttonNode.querySelector(".primary-letter").textContent = key[language]?.[0];
      buttonNode.querySelector(".secondary-letter").textContent = key[language]?.[1];

      const keyBtn = createEl("button", {
        classList: ["key"],
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

      keyBtn.appendChild(buttonNode);
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
  box = renderKeyboard(message.payload.lng, message.payload.numbersLayout, message.payload.layout);
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
  if (state.isDragging) {
    state.wrapperX = state.mouseX - state.offsetX;
    state.wrapperY = state.mouseY - state.offsetY;

    wrapper.style.transform = `translate(${state.wrapperX}px, ${state.wrapperY}px)`;
    requestAnimationFrame(updatePosition);
  }
}

function onToggleMouseDown(e) {
  e.preventDefault();
  state.isDragging = true;
  state.offsetX = e.clientX - state.wrapperX;
  state.offsetY = e.clientY - state.wrapperY;
  state.mouseX = e.clientX;
  state.mouseY = e.clientY;

  toggleBtn.classList.add("noselect");
  requestAnimationFrame(updatePosition);
}

function onMouseMove(e) {
  if (state.isDragging) {
    state.dragged = true;
    state.mouseX = e.clientX;
    state.mouseY = e.clientY;
    wrapper.style.cursor = "grabbing";
  }
}

function onMouseUp() {
  state.isDragging = false;
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
  if (state.dragged) {
    e.preventDefault();
    e.stopImmediatePropagation();
    state.dragged = false;
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
