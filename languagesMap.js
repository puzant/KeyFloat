export const numbersWindowsLayout = [
  { num: "`", ar: [" ّ", "ذ"], fr: ["²"], sp: [], am: [], keyCode: "Backquote" },
  { num: "1", ar: [], fr: ["&"], sp: [], am: ["է"], keyCode: "Digit1" },
  { num: "2", ar: [], fr: ["é"], sp: [], am: ["թ"], keyCode: "Digit2" },
  { num: "3", ar: [], fr: [""], sp: [], am: ["փ"], keyCode: "Digit3" },
  { num: "4", ar: [], fr: ["'"], sp: [], am: ["ձ"], keyCode: "Digit4" },
  { num: "5", ar: [], fr: [""], sp: [], am: ["ջ"], keyCode: "Digit5" },
  { num: "6", ar: [], fr: ["-"], sp: [], am: ["ւ"], keyCode: "Digit6" },
  { num: "7", ar: [], fr: ["è"], sp: [], am: ["և"], keyCode: "Digit7" },
  { num: "8", ar: [], fr: ["_"], sp: [], am: ["ր"], keyCode: "Digit8" },
  { num: "9", ar: [], fr: ["ç"], sp: [], am: ["չ"], keyCode: "Digit9" },
  { num: "0", ar: [], fr: ["à"], sp: [], am: ["ճ"], keyCode: "Digit0" },
];

export const windowsLayout = [
  [
    { en: "Q", ar: ["َ", "ض"], fr: ["", "A"], sp: ["", "Q"], am: ["", "ք"], eventName: "KeyQ" }, // Fatha
    { en: "W", ar: ["ً", "ص"], fr: ["", "Z"], sp: ["", "W"], am: ["", "ո"], eventName: "KeyW" }, // Tanwin Fatha
    { en: "E", ar: ["ُ", "ث"], fr: ["", "E"], sp: ["", "E"], am: ["", "ե"], eventName: "KeyE" }, // Damma
    { en: "R", ar: ["ٌ", "ق"], fr: ["", "R"], sp: ["", "R"], am: ["", "ռ"], eventName: "KeyR" }, // Tanwin Damma
    { en: "T", ar: ["لإ", "ف"], fr: ["", "T"], sp: ["", "T"], am: ["", "տ"], eventName: "KeyT" }, // Kasra
    { en: "Y", ar: ["إ", "غ"], fr: ["", "Y"], sp: ["", "Y"], am: ["", "ը"], eventName: "KeyY" }, // Tanwin Kasra
    { en: "U", ar: ["‘", "ع"], fr: ["", "U"], sp: ["", "U"], am: ["", "ւ"], eventName: "KeyU" }, // Sukun
    { en: "I", ar: ["", "ه"], fr: ["", "I"], sp: ["", "I"], am: ["", "ի"], eventName: "KeyI" },
    { en: "O", ar: ["", "خ"], fr: ["", "O"], sp: ["", "O"], am: ["", "օ"], eventName: "KeyO" },
    { en: "P", ar: ["", "ح"], fr: ["", "P"], sp: ["", "P"], am: ["", "պ"], eventName: "KeyP" },
    { en: "[", ar: ["", "ج"], fr: ["¨", "^"], sp: ["", "`"], am: ["", "խ"], eventName: "BracketLeft" },
    { en: "]", ar: ["", "د"], fr: ["£", "$"], sp: ["", "+"], am: ["", "ծ"], eventName: "BracketRight" },
  ],
  [
    { en: "A", ar: [" ِ", "ش"], fr: ["", "Q"], sp: ["", "A"], am: ["", "ա"], eventName: "KeyA" }, // Tatwil
    { en: "S", ar: [" ٍ", "س"], fr: ["", "S"], sp: ["", "S"], am: ["", "ս"], eventName: "KeyS" },
    { en: "D", ar: ["", "ي"], fr: ["", "D"], sp: ["", "D"], am: ["", "դ"], eventName: "KeyD" },
    { en: "F", ar: ["", "ب"], fr: ["", "F"], sp: ["", "F"], am: ["", "ֆ"], eventName: "KeyF" },
    { en: "G", ar: ["لأ", "ل"], fr: ["", "G"], sp: ["", "G"], am: ["", "գ"], eventName: "KeyG" },
    { en: "H", ar: ["أ", "ا"], fr: ["", "H"], sp: ["", "H"], am: ["", "հ"], eventName: "KeyH" },
    { en: "J", ar: ["", "ت"], fr: ["", "J"], sp: ["", "J"], am: ["", "յ"], eventName: "KeyJ" },
    { en: "K", ar: ["", "ن"], fr: ["", "K"], sp: ["", "K"], am: ["", "կ"], eventName: "KeyK" },
    { en: "L", ar: ["", "م"], fr: ["", "L"], sp: ["", "L"], am: ["", "լ"], eventName: "KeyL" },
    { en: ";", ar: ["ك", "ك"], fr: ["", "M"], sp: ["", "ñ"], am: ["", ";"], eventName: "Semicolon" }, // Shift doesn't change
    { en: "'", ar: ["ط", "ط"], fr: ["%", "ù"], sp: ["", "´"], am: ["", "՛"], eventName: "Quote" }, // Same
  ],
  [
    { en: "Z", ar: ["", "ئ"], fr: ["", "W"], sp: ["", "Z"], am: ["", "զ"], eventName: "KeyZ" }, // Shifted seems to be Kasra (historically), but can be left blank
    { en: "X", ar: [" ْ", "ء"], fr: ["", "X"], sp: ["", "X"], am: ["", "ղ"], eventName: "KeyX" },
    { en: "C", ar: ["", "ؤ"], fr: ["", "C"], sp: ["", "C"], am: ["", "ց"], eventName: "KeyC" },
    { en: "V", ar: ["", "ر"], fr: ["", "V"], sp: ["", "V"], am: ["", "վ"], eventName: "KeyV" },
    { en: "B", ar: ["لآ", "لا"], fr: ["", "B"], sp: ["", "B"], am: ["", "բ"], eventName: "KeyB" },
    { en: "N", ar: ["آ", "ى"], fr: ["", "N"], sp: ["", "N"], am: ["", "ն"], eventName: "KeyN" },
    { en: "M", ar: ["", "ة"], fr: ["?", ","], sp: ["", "M"], am: ["", "մ"], eventName: "KeyM" },
    { en: ",", ar: ["", "و"], fr: [".", ";"], sp: ["", ","], am: ["", ","], eventName: "Comma" },
    { en: ".", ar: ["", "ز"], fr: ["/", ":"], sp: ["", "."], am: ["", ":"], eventName: "Period" },
    { en: "/", ar: ["؟", "ظ"], fr: ["§", "!"], sp: ["", "-"], am: ["", "/"], eventName: "Slash" }, // Arabic question mark
  ],
];

export const numbersMacLayout = [
  { num: "`", ar: [], fr: ["#"], sp: [], keyCode: "Backquote" },
  { num: "1", ar: [], fr: ["&"], sp: [], keyCode: "Digit1" },
  { num: "2", ar: [], fr: ["é"], sp: [], keyCode: "Digit2" },
  { num: "3", ar: [], fr: [""], sp: [], keyCode: "Digit3" },
  { num: "4", ar: [], fr: ["'"], sp: [], keyCode: "Digit4" },
  { num: "5", ar: [], fr: [""], sp: [], keyCode: "Digit5" },
  { num: "6", ar: [], fr: ["§"], sp: [], keyCode: "Digit6" },
  { num: "7", ar: [], fr: ["è"], sp: [], keyCode: "Digit7" },
  { num: "8", ar: [], fr: ["!"], sp: [], keyCode: "Digit8" },
  { num: "9", ar: [], fr: ["ç"], sp: [], keyCode: "Digit9" },
  { num: "0", ar: [], fr: ["à"], sp: [], keyCode: "Digit0" },
];

export const macLayout = [
  [
    { en: "Q", ar: [" َ", "ض"], fr: ["", "A"], sp: ["", "Q"], eventName: "KeyQ" },
    { en: "W", ar: [" ً", "ص"], fr: ["", "Z"], sp: ["", "W"], eventName: "KeyW" },
    { en: "E", ar: [" ِ", "ث"], fr: ["", "E"], sp: ["", "E"], eventName: "KeyE" },
    { en: "R", ar: [" ٍ", "ق"], fr: ["", "R"], sp: ["", "R"], eventName: "KeyR" },
    { en: "T", ar: [" ُ", "ف"], fr: ["", "T"], sp: ["", "T"], eventName: "KeyT" },
    { en: "Y", ar: [" ٌ", "غ"], fr: ["", "Y"], sp: ["", "Y"], eventName: "KeyY" },
    { en: "U", ar: [" ْ", "ع"], fr: ["", "U"], sp: ["", "U"], eventName: "KeyU" },
    { en: "I", ar: [" ّ", "ه"], fr: ["", "I"], sp: ["", "I"], eventName: "KeyI" },
    { en: "O", ar: ["", "خ"], fr: ["", "O"], sp: ["", "O"], eventName: "KeyO" },
    { en: "P", ar: ["", "ح"], fr: ["", "P"], sp: ["", "P"], eventName: "KeyP" },
    { en: "{", ar: ["", "ج"], fr: ["", "^"], sp: ["", "´"], eventName: "BracketLeft" },
    { en: "}", ar: ["", "ة"], fr: ["", "$"], sp: ["", "+"], eventName: "BracketRight" },
  ],
  [
    { en: "A", ar: ["", "ش"], fr: ["", "Q"], sp: ["", "A"], eventName: "KeyA" },
    { en: "S", ar: ["", "س"], fr: ["", "S"], sp: ["", "S"], eventName: "KeyS" },
    { en: "D", ar: ["ى", "ي"], fr: ["", "D"], sp: ["", "D"], eventName: "KeyD" },
    { en: "F", ar: ["", "ب"], fr: ["", "F"], sp: ["", "F"], eventName: "KeyF" },
    { en: "G", ar: ["", "ل"], fr: ["", "G"], sp: ["", "G"], eventName: "KeyG" },
    { en: "H", ar: ["آ", "ا"], fr: ["", "H"], sp: ["", "H"], eventName: "KeyH" },
    { en: "J", ar: ["", "ت"], fr: ["", "J"], sp: ["", "J"], eventName: "KeyJ" },
    { en: "K", ar: ["", "ن"], fr: ["", "K"], sp: ["", "K"], eventName: "KeyK" },
    { en: "L", ar: ["", "م"], fr: ["", "L"], sp: ["", "L"], eventName: "KeyL" },
    { en: ";", ar: ["", "ك"], fr: ["", "M"], sp: ["", "ñ"], eventName: "Semicolon" },
    { en: "\u200B", ar: ["", "؛"], fr: ["%", "ù"], sp: ["", "{"], eventName: "Quote" },
  ],
  [
    { en: "Z", ar: ["", "ظ"], fr: ["", "W"], sp: ["", "Z"], eventName: "KeyZ" },
    { en: "X", ar: ["", "ط"], fr: ["", "X"], sp: ["", "X"], eventName: "KeyX" },
    { en: "C", ar: ["ئ", "ذ"], fr: ["", "C"], sp: ["", "C"], eventName: "KeyC" },
    { en: "V", ar: ["ء", "د"], fr: ["", "V"], sp: ["", "V"], eventName: "KeyV" },
    { en: "B", ar: ["أ", "ز"], fr: ["", "B"], sp: ["", "B"], eventName: "KeyB" },
    { en: "N", ar: ["إ", "ر"], fr: ["", "N"], sp: ["", "N"], eventName: "KeyN" },
    { en: "M", ar: ["ؤ", "و"], fr: ["?", ","], sp: ["", "M"], eventName: "KeyM" },
    { en: ",", ar: ["", "،"], fr: ["", ";"], sp: ["", ","], eventName: "Comma" },
    { en: ".", ar: ["", "."], fr: ["/", ":"], sp: ["", "."], eventName: "Period" },
    { en: "/", ar: ["", "/"], fr: ["+", "="], sp: ["", "-"], eventName: "Slash" },
  ],
];
