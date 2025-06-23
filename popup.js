import { debounce, updateSliderTrackColor } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("dropdown");
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");

  const keyboardToggle = document.querySelector(".switch input");
  const soundToggleWrapper = document.querySelector("#enableSound");
  const soundToggle = document.querySelector(".switch .sound-toggle");
  const visibilityInput = document.querySelector("#visibility-input");
  const opacityLevel = document.querySelector(".opacity-level");

  loadInitialSettings();

  dropdownBtn.addEventListener("click", toggleDropdownMenu);
  dropdownContent.addEventListener("click", handleDropdownSelection);
  keyboardToggle.addEventListener("change", toggleKeyboard);
  soundToggle.addEventListener("change", toggleSound);
  visibilityInput.addEventListener("input", handleKeyboardVisibility);

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });

  const debounceVisibilityHandler = debounce((value) => {
    chrome.storage.local.set({ opacityLevel: value });
    chrome.runtime.sendMessage({
      type: "UPDATE_VISIBILITY",
      payload: { opacityLevel: value },
    });
  }, 200);

  function handleKeyboardVisibility(e) {
    const value = e.target.value;
    opacityLevel.textContent = `${value}%`;
    updateSliderTrackColor(visibilityInput, value);
    debounceVisibilityHandler(value);
  }

  function toggleSound(e) {
    const isSoundChecked = e.target.checked;
    chrome.storage.local.set({ soundEnabled: isSoundChecked });

    chrome.runtime.sendMessage({
      type: "TOGGLE_SOUND",
      payload: { enabled: isSoundChecked },
    });
  }

  function toggleKeyboard(e) {
    const isKeyboardChecked = e.target.checked;
    chrome.storage.local.set({ keyboardEnabled: isKeyboardChecked });

    chrome.runtime.sendMessage({
      type: "TOGGLE_KEYBOARD",
      payload: {
        enabled: isKeyboardChecked,
      },
    });

    soundToggle.disabled = !isKeyboardChecked;
    soundToggleWrapper.style.opacity = isKeyboardChecked ? 1 : 0.5;

    //  Turn on visibility slider if keyboard is enabled
    visibilityInput.disabled = !isKeyboardChecked;
    if (!isKeyboardChecked) {
      visibilityInput.value = 100;
      opacityLevel.textContent = "100%";
      updateSliderTrackColor(visibilityInput, 100);
    }

    // Turn off sound toggle if keyboard is disabled
    if (!isKeyboardChecked) {
      chrome.storage.local.set({ soundEnabled: false });
      soundToggle.checked = false;
    }
  }

  function toggleDropdownMenu() {
    dropdown.classList.toggle("open");
  }

  function handleDropdownSelection(e) {
    const item = e.target.closest(".dropdown-item");

    if (item) {
      const selectedLang = item.dataset.lang;

      chrome.storage.local.set({ selectedLang });

      const langName = item.querySelector("span")?.textContent || "Language";
      const langImgSrc = item.querySelector("img")?.src;

      let langFlag = document.getElementById("langFlag");
      let langNameSpan = document.getElementById("langName");

      langFlag.src = langImgSrc;
      langNameSpan.textContent = langName;

      dropdown.classList.remove("open");
    }
  }

  function loadInitialSettings() {
    chrome.storage.local.get(["keyboardEnabled", "soundEnabled", "opacityLevel", "selectedLang"], (result) => {
      const languageElement = document.querySelector(`[data-lang=${result.selectedLang}]`);
      const targetElementLangText = languageElement.querySelector("span")?.textContent;
      const tragetElementLangImageSrc = languageElement.querySelector("img")?.src;

      let langNameSpan = document.getElementById("langName");
      let langFlag = document.getElementById("langFlag");

      langFlag.src = tragetElementLangImageSrc;
      langNameSpan.textContent = targetElementLangText;

      const keyboardEnabled = result.keyboardEnabled ?? false;
      const soundEnabled = result.soundEnabled ?? false;
      const storedOpacity = result.opacityLevel ?? 100;

      keyboardToggle.checked = keyboardEnabled;
      soundToggle.checked = soundEnabled;

      soundToggle.disabled = !keyboardEnabled;
      soundToggleWrapper.style.opacity = keyboardEnabled ? 1 : 0.5;

      //  Initialize visibility input
      visibilityInput.disabled = !keyboardEnabled;
      visibilityInput.value = storedOpacity;
      opacityLevel.textContent = `${storedOpacity}%`;
      updateSliderTrackColor(visibilityInput, storedOpacity);
    });
  }
});
