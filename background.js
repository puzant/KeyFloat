chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    keyboardEnabled: false,
    soundEnabled: false,
    opacityLevel: 100,
  });
});

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  switch (message.type) {
    case "LANG_CHANGE":
      chrome.tabs.sendMessage(tab.id, {
        type: "LANG_CHANGE",
        payload: { lng: message.payload.selectedLang },
      });
      break;

    case "TOGGLE_SOUND":
      chrome.tabs.sendMessage(tab.id, {
        type: "SOUND_TOGGLE",
        payload: { enabled: message.payload.enabled },
      });
      break;

    case "TOGGLE_KEYBOARD":
      if (message.payload.enabled) {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content-script.js"],
        });

        chrome.tabs.sendMessage(tab.id, {
          type: "KEYBOARD_OPEN",
          payload: { lng: message.payload.selectedLang },
        });
      } else {
        chrome.tabs.sendMessage(tab.id, {
          type: "KEYBOARD_CLOSE",
        });
      }
      break;

    case "UPDATE_VISIBILITY":
      chrome.tabs.sendMessage(tab.id, {
        type: "UPDATE_VISIBILITY",
        payload: { opacityLevel: message.payload.opacityLevel },
      });
      break;
  }
});
