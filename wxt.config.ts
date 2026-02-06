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
  }
});
