import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    permissions: ['storage', 'scripting', 'tabs'],
    version: '1.4.0',
    name: 'KeyFloat',
    description: 'Floating multilingual keyboard with native key mappings, drag, dark mode, sounds, and dynamic layouts for macOS & Windows',
    host_permissions: ['<all_urls>'],
    commands: {
      TOGGLE_COLLAPSE: {
        suggested_key: { default: 'Ctrl+Shift+K', mac: 'Command+Shift+K' },
        description: 'Minimize / collapse the floating keyboard',
      },

      TOGGLE_THEME: {
        suggested_key: { default: 'Ctrl+Shift+O', mac: 'Command+Shift+O' },
        description: 'Toggle between dark and light mode'
      },
      
      SET_KEYBOARD_MASTER: {
        suggested_key: { default: 'Ctrl+Shift+P', mac: 'Command+Shift+P' },
        description: 'Shutdown / hide the floating keyboard'
      }
    }
  }
});
