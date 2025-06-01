window.addEventListener('keydown', (e) => {
  const pressedKey = e.code

  window.dispatchEvent(new CustomEvent('FROM_INJECTED_KEYDOWN', {
    detail: { code: pressedKey }
  }))
})
