import { updatePrefs, queryTab, sendMessageToTab } from "@/utils"
import { MessageType, MsgType } from "@/types"

async function ensureContentScript(tabId: number) {
  try {
    await sendMessageToTab(tabId, { type: MessageType.PING })
  } catch (err) {
    await browser.scripting.executeScript({
      target: { tabId },
      files: ['content-scripts/content.js']
    })
  }
}

const handlers = {
  [MessageType.APPLY_LANGUAGE]: (msg: MsgType) => updatePrefs(p => ({ ...p, selectedLanguage: msg.payload.selectedLanguage })),
  [MessageType.APPLY_SOUND]: (msg: MsgType) => updatePrefs(p => ({ ...p, soundEnabled: msg.payload.soundEnabled })),
  [MessageType.APPLY_VISIBILITY]: (msg: MsgType) => updatePrefs(p => ({ ...p, visibility: msg.payload.visibility })),
  [MessageType.TOGGLE_THEME]: () => updatePrefs(p => ({ ...p, isDarkMode: !p.isDarkMode })),
  [MessageType.TOGGLE_COLLAPSE]: () => updatePrefs(p => ({ ...p, isCollapsed: !p.isCollapsed })),
  [MessageType.SAVE_POSITION]: (msg: MsgType) => updatePrefs(p => ({ ...p, position: msg.payload.position })),
  [MessageType.SET_KEYBOARD_MASTER]: async (msg: MsgType) => {
    const { visible } = msg.payload
    await updatePrefs(prefs => ({ ...prefs, keyboardEnabled: visible }))

    const tabId = await queryTab()
    await ensureContentScript(tabId)
    sendMessageToTab(tabId, { type: MessageType.APPLY_KEYBOARD_VISIBILITY, payload: { visible } })
  }
}

const commandHandlers = {
  [MessageType.TOGGLE_THEME]: () => updatePrefs(p => ({ ...p, isDarkMode: !p.isDarkMode })),
  [MessageType.TOGGLE_COLLAPSE]: () => updatePrefs(p => ({ ...p, isCollapsed: !p.isCollapsed })),
  [MessageType.SET_KEYBOARD_MASTER]: async () => {
    await updatePrefs(p => ({ ...p, keyboardEnabled: !p.keyboardEnabled }))
    
    const tabId = await queryTab()
    sendMessageToTab(tabId, { type: MessageType.APPLY_KEYBOARD_VISIBILITY, payload: { visible: false } })
  }
}

export default defineBackground(() => {
  browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    handlers[message.type]?.(message)
    return true
  })

  browser.commands.onCommand.addListener((command) => {
    commandHandlers[command]?.()
  })
})
