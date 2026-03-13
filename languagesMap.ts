export const numbersMacLayout = [
  { num: "`", ru: [], ar: [], fr: ["#"], am: [""], eventName: "Backquote" },
  { num: "1", ru: [], ar: [], fr: ["&"], am: ["։"], eventName: "Digit1" },
  { num: "2", ru: [], ar: [], fr: ["é"], am: ["ձ"], eventName: "Digit2" },
  { num: "3", ru: [], ar: [], fr: [""], am: ["յ"], eventName: "Digit3" },
  { num: "4", ru: [], ar: [], fr: ["'"], am: ["՛"], eventName: "Digit4" },
  { num: "5", ru: [], ar: [], fr: [""], am: [","], eventName: "Digit5" },
  { num: "6", ru: [], ar: [], fr: ["§"], am: ["-"], eventName: "Digit6" },
  { num: "7", ru: [], ar: [], fr: ["è"], am: ["."], eventName: "Digit7" },
  { num: "8", ru: [], ar: [], fr: ["!"], am: ["«"], eventName: "Digit8" },
  { num: "9", ru: [], ar: [], fr: ["ç"], am: ["»"], eventName: "Digit9" },
  { num: "0", ru: [], ar: [], fr: ["à"], am: ["օ"], eventName: "Digit0" },
];

export const numbersWindowsLayout = [
  { num: "`", ru: ["", ""], ar: [" ّ", "ذ"], fr: ["²"], am: [], eventName: "Backquote" },
  { num: "1", ru: ["", ""], ar: [], fr: ["&"], am: ["է"], eventName: "Digit1" },
  { num: "2", ru: ["", ""], ar: [], fr: ["é"], am: ["թ"], eventName: "Digit2" },
  { num: "3", ru: ["", ""], ar: [], fr: [""], am: ["փ"], eventName: "Digit3" },
  { num: "4", ru: ["", ""], ar: [], fr: ["'"], am: ["ձ"], eventName: "Digit4" },
  { num: "5", ru: ["", ""], ar: [], fr: [""], am: ["ջ"], eventName: "Digit5" },
  { num: "6", ru: ["", ""], ar: [], fr: ["-"], am: ["ւ"], eventName: "Digit6" },
  { num: "7", ru: ["", ""], ar: [], fr: ["è"], am: ["և"], eventName: "Digit7" },
  { num: "8", ru: ["", ""], ar: [], fr: ["_"], am: ["ր"], eventName: "Digit8" },
  { num: "9", ru: ["", ""], ar: [], fr: ["ç"], am: ["չ"], eventName: "Digit9" },
  { num: "0", ru: ["", ""], ar: [], fr: ["à"], am: ["ճ"], eventName: "Digit0" },
  { num: "-", ru: ["", ""], ar: [], fr: [], am: [], eventName: "Minus" },
  { num: "=", ru: ["", ""], ar: [], fr: [], am: ["ժ"], eventName: "Equal" },
];

export const macLayout = [
  [
    { en: "Q", ru: ["", "й"], ar: [" َ", "ض"], fr: ["", "A"], am: ["", "խ"], eventName: "KeyQ" },
    { en: "W", ru: ["", "ц"], ar: [" ً", "ص"], fr: ["", "Z"], am: ["", "վ"], eventName: "KeyW" },
    { en: "E", ru: ["", "у"], ar: [" ِ", "ث"], fr: ["", "E"], am: ["", "է"], eventName: "KeyE" },
    { en: "R", ru: ["", "к"], ar: [" ٍ", "ق"], fr: ["", "R"], am: ["", "ր"], eventName: "KeyR" },
    { en: "T", ru: ["", "е"], ar: [" ُ", "ف"], fr: ["", "T"], am: ["", "դ"], eventName: "KeyT" },
    { en: "Y", ru: ["", "н"], ar: [" ٌ", "غ"], fr: ["", "Y"], am: ["", "ե"], eventName: "KeyY" },
    { en: "U", ru: ["", "г"], ar: [" ْ", "ع"], fr: ["", "U"], am: ["", "ը"], eventName: "KeyU" },
    { en: "I", ru: ["", "ш"], ar: [" ّ", "ه"], fr: ["", "I"], am: ["", "ի"], eventName: "KeyI" },
    { en: "O", ru: ["", "щ"], ar: ["", "خ"], fr: ["", "O"], am: ["", "ո"], eventName: "KeyO" },
    { en: "P", ru: ["", "з"], ar: ["", "ح"], fr: ["", "P"], am: ["", "բ"], eventName: "KeyP" },
    { en: "{", ru: ["", "х"], ar: ["", "ج"], fr: ["", "^"], am: ["", "չ"], eventName: "BracketLeft" },
    { en: "}", ru: ["", "ъ"], ar: ["", "ة"], fr: ["", "$"], am: ["", "ջ"], eventName: "BracketRight" },
  ],
  [
    { en: "A", ru: ["", "ф"], ar: ["", "ش"], fr: ["", "Q"], am: ["", "ա"], eventName: "KeyA" },
    { en: "S", ru: ["", "ы"], ar: ["", "س"], fr: ["", "S"], am: ["", "ս"], eventName: "KeyS" },
    { en: "D", ru: ["", "в"], ar: ["ى", "ي"], fr: ["", "D"], am: ["", "տ"], eventName: "KeyD" },
    { en: "F", ru: ["", "а"], ar: ["", "ب"], fr: ["", "F"], am: ["", "ֆ"], eventName: "KeyF" },
    { en: "G", ru: ["", "п"], ar: ["", "ل"], fr: ["", "G"], am: ["", "կ"], eventName: "KeyG" },
    { en: "H", ru: ["", "р"], ar: ["آ", "ا"], fr: ["", "H"],am: ["", "հ"], eventName: "KeyH" },
    { en: "J", ru: ["", "о"], ar: ["", "ت"], fr: ["", "J"], am: ["", "ճ"], eventName: "KeyJ" },
    { en: "K", ru: ["", "л"], ar: ["", "ن"], fr: ["", "K"], am: ["", "ք"], eventName: "KeyK" },
    { en: "L", ru: ["", "д"], ar: ["", "م"], fr: ["", "L"], am: ["", "լ"], eventName: "KeyL" },
    { en: ";", ru: ["", "ж"], ar: ["", "ك"], fr: ["", "M"], am: ["", "թ"], eventName: "Semicolon" },
    { en: "\u200B", ru: ["", "э"], ar: ["", "؛"], fr: ["%", "ù"], am: ["", "փ"], eventName: "Quote" },
  ],
  [
    { en: "Z", ru: ["", "я"], ar: ["", "ظ"], fr: ["", "W"], am: ["", "զ"], eventName: "KeyZ" },
    { en: "X", ru: ["", "ч"], ar: ["", "ط"], fr: ["", "X"], am: ["", "ց"], eventName: "KeyX" },
    { en: "C", ru: ["", "с"], ar: ["ئ", "ذ"], fr: ["", "C"], am: ["", "գ"], eventName: "KeyC" },
    { en: "V", ru: ["", "м"], ar: ["ء", "د"], fr: ["", "V"], am: ["", "ւ"], eventName: "KeyV" },
    { en: "B", ru: ["", "и"], ar: ["أ", "ز"], fr: ["", "B"], am: ["", "պ"], eventName: "KeyB" },
    { en: "N", ru: ["", "т"], ar: ["إ", "ر"], fr: ["", "N"], am: ["", "ն"], eventName: "KeyN" },
    { en: "M", ru: ["", "ь"], ar: ["ؤ", "و"], fr: ["?", ","], am: ["", "մ"], eventName: "KeyM" },
    { en: ",", ru: ["", "б"], ar: ["", "،"], fr: ["", ";"], am: ["", "շ"], eventName: "Comma" },
    { en: ".", ru: ["", "ю"], ar: ["", "."], fr: ["/", ":"], am: ["", "ղ"], eventName: "Period" },
    { en: "/", ru: ["", "/"], ar: ["", "/"], fr: ["+", "="], am: ["", "ծ"], eventName: "Slash" },
  ],
];

export const windowsLayout = [
  [
    { en: "Q", ru:["", "й"], ar: ["َ", "ض"], fr: ["", "A"], am: ["", "ք"], eventName: "KeyQ" }, // Fatha
    { en: "W", ru:["", "ц"], ar: ["ً", "ص"], fr: ["", "Z"], am: ["", "ո"], eventName: "KeyW" }, // Tanwin Fatha
    { en: "E", ru:["", "у"], ar: ["ُ", "ث"], fr: ["", "E"], am: ["", "ե"], eventName: "KeyE" }, // Damma
    { en: "R", ru:["", "к"], ar: ["ٌ", "ق"], fr: ["", "R"], am: ["", "ռ"], eventName: "KeyR" }, // Tanwin Damma
    { en: "T", ru:["", "е"], ar: ["لإ", "ف"], fr: ["", "T"], am: ["", "տ"], eventName: "KeyT" }, // Kasra
    { en: "Y", ru:["", "н"], ar: ["إ", "غ"], fr: ["", "Y"], am: ["", "ը"], eventName: "KeyY" }, // Tanwin Kasra
    { en: "U", ru:["", "г"], ar: ["‘", "ع"], fr: ["", "U"], am: ["", "ւ"], eventName: "KeyU" }, // Sukun
    { en: "I", ru:["", "ш"], ar: ["", "ه"], fr: ["", "I"], am: ["", "ի"], eventName: "KeyI" },
    { en: "O", ru:["", "щ"], ar: ["", "خ"], fr: ["", "O"], am: ["", "օ"], eventName: "KeyO" },
    { en: "P", ru:["", "з"], ar: ["", "ح"], fr: ["", "P"], am: ["", "պ"], eventName: "KeyP" },
    { en: "[", ru:["", "х"], ar: ["", "ج"], fr: ["¨", "^"], am: ["", "խ"], eventName: "BracketLeft" },
    { en: "]", ru:["", "ъ"], ar: ["", "د"], fr: ["£", "$"], am: ["", "ծ"], eventName: "BracketRight" },
    { en: "\\", ru:["", ""], ar: ["", ""], fr: ["", ""], am: ["", "շ"], eventName: "Backslash" },    
  ],
  [
    { en: "A", ru: ["", "ф"], ar: [" ِ", "ش"], fr: ["", "Q"], am: ["", "ա"], eventName: "KeyA" }, // Tatwil
    { en: "S", ru: ["", "ы"], ar: [" ٍ", "س"], fr: ["", "S"], am: ["", "ս"], eventName: "KeyS" },
    { en: "D", ru: ["", "в"], ar: ["", "ي"], fr: ["", "D"], am: ["", "դ"], eventName: "KeyD" },
    { en: "F", ru: ["", "а"], ar: ["", "ب"], fr: ["", "F"], am: ["", "ֆ"], eventName: "KeyF" },
    { en: "G", ru: ["", "п"], ar: ["لأ", "ل"], fr: ["", "G"], am: ["", "գ"], eventName: "KeyG" },
    { en: "H", ru: ["", "р"], ar: ["أ", "ا"], fr: ["", "H"], am: ["", "հ"], eventName: "KeyH" },
    { en: "J", ru: ["", "о"], ar: ["", "ت"], fr: ["", "J"], am: ["", "յ"], eventName: "KeyJ" },
    { en: "K", ru: ["", "л"], ar: ["", "ن"], fr: ["", "K"], am: ["", "կ"], eventName: "KeyK" },
    { en: "L", ru: ["", "д"], ar: ["", "م"], fr: ["", "L"], am: ["", "լ"], eventName: "KeyL" },
    { en: ";", ru: ["", "ж"], ar: ["", "ك"], fr: ["", "M"], am: ["", ";"], eventName: "Semicolon" }, // Shift doesn't change
    { en: "'", ru: ["", "э"], ar: ["", "ط"], fr: ["%", "ù"], am: ["", "՛"], eventName: "Quote" }, // Same
  ],
  [
    { en: "Z", ru: ["", "я"], ar: ["", "ئ"], fr: ["", "W"], am: ["", "զ"], eventName: "KeyZ" }, // Shifted seems to be Kasra (historically), but can be left blank
    { en: "X", ru: ["", "ч"], ar: [" ْ", "ء"], fr: ["", "X"], am: ["", "ղ"], eventName: "KeyX" },
    { en: "C", ru: ["", "с"], ar: ["", "ؤ"], fr: ["", "C"], am: ["", "ց"], eventName: "KeyC" },
    { en: "V", ru: ["", "м"], ar: ["", "ر"], fr: ["", "V"], am: ["", "վ"], eventName: "KeyV" },
    { en: "B", ru: ["", "и"], ar: ["لآ", "لا"], fr: ["", "B"], am: ["", "բ"], eventName: "KeyB" },
    { en: "N", ru: ["", "т"], ar: ["آ", "ى"], fr: ["", "N"], am: ["", "ն"], eventName: "KeyN" },
    { en: "M", ru: ["", "ь"], ar: ["", "ة"], fr: ["?", ","], am: ["", "մ"], eventName: "KeyM" },
    { en: ",", ru: ["", "б"], ar: ["", "و"], fr: [".", ";"], am: ["", ","], eventName: "Comma" },
    { en: ".", ru: ["", "ю"], ar: ["", "ز"], fr: ["/", ":"], am: ["", ":"], eventName: "Period" },
    { en: "/", ru: ["", "."], ar: ["؟", "ظ"], fr: ["§", "!"], am: ["", "/"], eventName: "Slash" }, // Arabic question mark
  ],
];