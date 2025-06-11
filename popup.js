document.addEventListener("DOMContentLoaded", () => {
  const keyboardToggle = document.querySelector(".switch input");
  const soundToggle = document.querySelector(".switch .sound-toggle");
  const visibilityInput = document.querySelector("#visibility-input");
  const opacityLevel = document.querySelector(".opacity-level");

  chrome.storage.local.get(["keyboardEnabled", "soundEnabled"], (result) => {
    keyboardToggle.checked = result.keyboardEnabled || false;
    soundToggle.checked = result.soundEnabled || false;
    visibilityInput.disabled = !result.keyboardEnabled;
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

  visibilityInput.addEventListener("input", (e) => {
    const value = e.target.value;

    opacityLevel.textContent = `${value}%`;
    visibilityInput.style.background = `linear-gradient(to right, #ff5733 0%, #ff5733 ${value}%, #bdb9a6 ${value}%, #bdb9a6 100%)`;
  });
});
