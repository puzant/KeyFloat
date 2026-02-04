import { useState, useEffect } from "react"
import { preferences, UserPreferences } from "@/storage/preferences"

export function usePreferences() {
  const [prefs, setPrefs] = useState<UserPreferences>(preferences.fallback)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    preferences.getValue().then((value) => {
      if (value !== null) {
        setPrefs(value)
      }

      setIsLoading(false)
    })

    const unwatch = preferences.watch((newValue) => {
      setPrefs(newValue ?? preferences.fallback)
    })

    return () => unwatch()
  }, [])

  const update = async (updates: Partial<UserPreferences>) => {
    const newPrefs = { ...prefs, ...updates }
    setPrefs(newPrefs)
    await preferences.setValue(newPrefs)
  }

  return {
    preferences: prefs,
    updatePreferences: update,
    isLoading,
  }
}
