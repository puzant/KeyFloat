const createEl = (tag, options = {}) => {
  const el = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    if (key === "style") Object.assign(el.style, value);
    else if (key === "classList") el.classList.add(...value);
    else if (key === "innerHTML") el.innerHTML = value;
    else el.setAttribute(key, value);
  });
  return el;
};

export default createEl