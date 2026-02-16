import ReactDOM from 'react-dom/client'
import { preferences } from "@/storage/preferences"
import KeyboardWrapper from '@/components/keyboardWrapper'
import { MessageType } from '@/types'

export default defineContentScript({
  matches: ['<all_urls>'],
  cssInjectionMode: 'ui',

  async main(ctx) {
    if ((window as any).__KEYFLOAT_INITIALIZED__) {
      return
    }

    ;(window as any).__KEYFLOAT_INITIALIZED__ = true

    const prefs = await preferences.getValue() ?? preferences.fallback
    const ui = await createShadowRootUi(ctx, {
      name: 'key-float',
      position: 'overlay',
      anchor: 'body',

      onMount(container) {
        const app = document.createElement('div')
        app.id = 'keyfloat-root'
        app.style.position = 'fixed'
        app.style.top = '0'
        app.style.left = '0'
        app.style.width = '0'
        app.style.height = '0'
        app.style.zIndex = '9999'
        container.appendChild(app)

        const root = ReactDOM.createRoot(app)
        root.render( <KeyboardWrapper initialPrefs={prefs} /> )
        return root
      },

      onRemove: (root) => {
        root?.unmount()
      }
    })

    browser.runtime.onMessage.addListener((message) => {
      switch (message.type) {
        case MessageType.APPLY_KEYBOARD_VISIBILITY:
          message.payload.visible ? ui.mount() : ui.remove()
          break
      }
    })
  }
});
