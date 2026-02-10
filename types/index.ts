export const MessageType = {
  SET_KEYBOARD_MASTER:          'SET_KEYBOARD_MASTER',
  APPLY_KEYBOARD_VISIBILITY:    'APPLY_KEYBOARD_VISIBILITY',
  TOGGLE_THEME:                 'TOGGLE_THEME',
  TOGGLE_COLLAPSE:              'TOGGLE_COLLAPSE',
  SAVE_POSITION:                'SAVE_POSITION',

  APPLY_SOUND:                  'APPLY_SOUND',
  APPLY_VISIBILITY:             'APPLY_VISIBILITY',
  APPLY_LANGUAGE:               'APPLY_LANGUAGE'
}

export interface LanguageItem {
  title: string 
  icon: string
  lng: 'am' | 'sp' | 'fr' | 'ar' 
}

export interface MsgType<T = any> {
  type: string 
  payload: T
}

export type MessageType = keyof typeof MessageType;
