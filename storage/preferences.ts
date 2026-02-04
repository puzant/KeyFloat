import { LanguageItem } from "@/types"

export interface UserPreferences {
  selectedLanguage: LanguageItem | null
  keyboardEnabled: boolean
  soundEnabled: boolean
  visibility: number
  isDarkMode: boolean
  isCollapsed: boolean
  position: { x: number, y: number }
}

export const DEFAULT_PREFERENCES: UserPreferences = {
  selectedLanguage: null,
  keyboardEnabled: false,
  soundEnabled: false,
  visibility: 100,
  isDarkMode: false,
  isCollapsed: false,
  position: { x: 0, y: 0 }
}

export const preferences = storage.defineItem<UserPreferences>(
  'sync:userPreferences', {
    fallback: DEFAULT_PREFERENCES
  }
)