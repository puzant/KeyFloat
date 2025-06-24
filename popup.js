import { debounce, updateSliderTrackColor, getFromStorage } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("dropdown");
  const dropdownBtn = document.getElementById("dropdownBtn");
  const dropdownContent = document.getElementById("dropdownContent");

  const keyboardToggleWrapper = document.querySelector("#enableKeyboard");
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

  async function toggleKeyboard(e) {
    const isKeyboardChecked = e.target.checked;
    const result = await getFromStorage(["keyboardEnabled", "selectedLang"]);

    chrome.storage.local.set({ keyboardEnabled: isKeyboardChecked });

    chrome.runtime.sendMessage({
      type: "TOGGLE_KEYBOARD",
      payload: {
        enabled: isKeyboardChecked,
        selectedLang: result.selectedLang,
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
      // todo: if keyboard is not enabled don't send event to content script
      chrome.runtime.sendMessage({
        type: "LANG_CHANGE",
        payload: { selectedLang },
      });

      const langName = item.querySelector("span")?.textContent || "Language";
      const langImgSrc = item.querySelector("img")?.src;

      updateLangDisplay(langName, langImgSrc);
      dropdown.classList.remove("open");

      keyboardToggleWrapper.style.opacity = selectedLang ? 1 : 0.5;
      keyboardToggle.disabled = !selectedLang;
    }
  }

  async function loadInitialSettings() {
    const result = await getFromStorage(["keyboardEnabled", "soundEnabled", "opacityLevel", "selectedLang"]);

    const languageElement = document.querySelector(`[data-lang=${result.selectedLang}]`);
    const targetElementLangText = languageElement.querySelector("span")?.textContent;
    const tragetElementLangImageSrc = languageElement.querySelector("img")?.src;

    updateLangDisplay(targetElementLangText, tragetElementLangImageSrc);

    const keyboardEnabled = result.keyboardEnabled ?? false;
    const soundEnabled = result.soundEnabled ?? false;
    const storedOpacity = result.opacityLevel ?? 100;

    keyboardToggleWrapper.style.opacity = result.selectedLang ? 1 : 0.5;
    keyboardToggle.disabled = !result.selectedLang;
    keyboardToggle.checked = keyboardEnabled;

    soundToggle.disabled = !keyboardEnabled;
    soundToggle.checked = soundEnabled;
    soundToggleWrapper.style.opacity = keyboardEnabled ? 1 : 0.5;

    //  Initialize visibility input
    visibilityInput.disabled = !keyboardEnabled;
    visibilityInput.value = storedOpacity;
    opacityLevel.textContent = `${storedOpacity}%`;
    updateSliderTrackColor(visibilityInput, storedOpacity);
  }

  function updateLangDisplay(spanText, imgSrc) {
    const langFlag = document.getElementById("langFlag");
    const langNameSpan = document.getElementById("langName");

    if (langFlag && langNameSpan) {
      langFlag.src = imgSrc || "";
      langNameSpan.textContent = spanText || "Language";
    }
  }
});
