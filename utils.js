export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

export function updateSliderTrackColor(inputEl, value) {
  if (!inputEl || isNaN(value)) return;
  const percentage = Math.max(0, Math.min(100, value));
  inputEl.style.background = `linear-gradient(to right, #ff5733 0%, #ff5733 ${percentage}%, #bdb9a6 ${percentage}%, #bdb9a6 100%)`;
}

export const getFromStorage = (key) => new Promise((resolve) => chrome.storage.local.get(key, resolve));
