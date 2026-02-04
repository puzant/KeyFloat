import { preferences, UserPreferences } from "@/storage/preferences"
import { MessageType } from "@/types"

interface MsgType<T = any> {
  type: string 
  payload: T
}

async function updatePrefs (updater: (prefs: UserPreferences) => UserPreferences) {
 const prefs = await preferences.getValue() ?? preferences.fallback
  const newPrefs = updater(prefs)
  await preferences.setValue(newPrefs) 
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
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true })
    
    if (!tab?.id) return
    
    await browser.tabs.sendMessage(tab.id, { type: MessageType.APPLY_KEYBOARD_VISIBILITY, payload: { visible } })
  }
}

export default defineBackground(() => {
  browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    handlers[message.type]?.(message)
    return true
  })
})
