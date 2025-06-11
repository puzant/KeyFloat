document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.switch input')
  const soundToggle = document.querySelector('.switch .sound-toggle')

 chrome.storage.local.get(['keyboardEnabled', 'soundEnabled'], (result) => {
    toggle.checked = result.keyboardEnabled || false
    soundToggle.checked = result.soundEnabled || false
  })

  soundToggle.addEventListener('change', async (e) => {
    const isSoundChecked = e.target.checked
    chrome.storage.local.set({ soundEnabled: isSoundChecked })
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.tabs.sendMessage(tab.id, { isSoundEnabled: isSoundChecked })
  })

  toggle.addEventListener('change', async (e) => {
    const isChecked = e.target.checked
    chrome.storage.local.set({ keyboardEnabled: isChecked })
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

     await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content-script.js'],
      })
      
    if (isChecked) {
      chrome.tabs.sendMessage(tab.id, { lng: 'ar' })
      setTimeout(() => window.close(), 1000)
    } else {
      chrome.tabs.sendMessage(tab.id, { action: 'closeKeyboard' })
    }

    await chrome.storage.sync.set({ keyboardEnabled: e.target.checked })
  })

})

