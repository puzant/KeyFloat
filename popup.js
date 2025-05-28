document.getElementById("apply-btn").addEventListener("click", async () => {
  const selectedLanguage = document.querySelector('input[name="language"]:checked').value
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js'],
  })

  chrome.tabs.sendMessage(tab.id, { lng: selectedLanguage })
})
