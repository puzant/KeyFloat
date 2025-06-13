chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  switch (message.type) {
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
          payload: { lng: "ar" },
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
