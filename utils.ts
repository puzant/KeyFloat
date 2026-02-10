import { preferences, UserPreferences } from "@/storage/preferences"
import { MsgType } from "./types"

export async function updatePrefs (updater: (prefs: UserPreferences) => UserPreferences) {
  const prefs = await preferences.getValue() ?? preferences.fallback
  const newPrefs = updater(prefs)
  await preferences.setValue(newPrefs) 
}

export async function queryTab(): Promise<number> {
  const [tab] = await browser.tabs.query({ active: true, currentWindow: true })

  if (!tab.id) 
    throw new Error("No active tab found")

  return tab.id
}

export function sendMessageToTab(tabId: number, msg: MsgType) {
  browser.tabs.sendMessage(tabId, msg)
}