import './components/mainKeyboard.js'

// const mainKeyboard = document.createElement('main-keyboard')
// document.body.appendChild(mainKeyboard)

function attachKeyListenerToIframe(iframe) {
  try {
    if (iframe.contentWindow && !iframe.__keyListenerAttached) {
      iframe.contentWindow.addEventListener('keydown', (e) => {
        window.dispatchEvent(new CustomEvent('FROM_INJECTED_KEYDOWN', {
          detail: { code: e.code }
        }))
      })
      iframe.__keyListenerAttached = true
    }
  } catch (err) {
    // Ignore cross-origin iframe errors
  }
}

function observeForEditors() {
  const observer = new MutationObserver(() => {
    const iframes = document.querySelectorAll('iframe')

    iframes.forEach(iframe => {
      if (iframe.className.includes('docs-texteventtarget-iframe')) {
        attachKeyListenerToIframe(iframe)
      }
    })
  })

  observer.observe(document.body, { childList: true, subtree: true })
}

window.addEventListener('keydown', (e) => {
  window.dispatchEvent(new CustomEvent('FROM_INJECTED_KEYDOWN', {
    detail: { code: e.code }
  }))
})

observeForEditors()