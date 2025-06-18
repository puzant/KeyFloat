import { debounce, updateSliderTrackColor } from "./utils.js";

document.addEventListener("DOMContentLoaded", () => {
  const keyboardToggle = document.querySelector(".switch input");
  const soundToggle = document.querySelector(".switch .sound-toggle");
  const visibilityInput = document.querySelector("#visibility-input");
  const opacityLevel = document.querySelector(".opacity-level");

  chrome.storage.local.get(["keyboardEnabled", "soundEnabled", "opacityLevel"], (result) => {
    const keyboardEnabled = result.keyboardEnabled ?? false;
    const soundEnabled = result.soundEnabled ?? false;
    const storedOpacity = result.opacityLevel ?? 100;

    keyboardToggle.checked = keyboardEnabled;
    soundToggle.checked = soundEnabled;

    //  Initialize visibility input
    visibilityInput.disabled = !keyboardEnabled;
    visibilityInput.value = storedOpacity;
    opacityLevel.textContent = `${storedOpacity}%`;
    updateSliderTrackColor(visibilityInput, storedOpacity);
  });

  keyboardToggle.addEventListener("change", (e) => {
    const isKeyboardChecked = e.target.checked;
    chrome.storage.local.set({ keyboardEnabled: isKeyboardChecked });

    chrome.runtime.sendMessage({
      type: "TOGGLE_KEYBOARD",
      payload: { enabled: isKeyboardChecked },
    });

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
  });

  soundToggle.addEventListener("change", (e) => {
    const isSoundChecked = e.target.checked;
    chrome.storage.local.set({ soundEnabled: isSoundChecked });

    chrome.runtime.sendMessage({
      type: "TOGGLE_SOUND",
      payload: { enabled: isSoundChecked },
    });
  });

  const debounceVisibilityHandler = debounce((value) => {
    chrome.storage.local.set({ opacityLevel: value });
    chrome.runtime.sendMessage({
      type: "UPDATE_VISIBILITY",
      payload: { opacityLevel: value },
    });
  }, 200);

  visibilityInput.addEventListener("input", (e) => {
    const value = e.target.value;
    opacityLevel.textContent = `${value}%`;
    updateSliderTrackColor(visibilityInput, value);
    debounceVisibilityHandler(value);
  });
});
