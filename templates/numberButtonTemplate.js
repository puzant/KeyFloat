const numberButtonTemplate = document.createElement("template")

numberButtonTemplate.innerHTML = `
  <style>
    .container {
      display: flex;
      justify-content: space-between;
    }
  </style>

  <div class="container">
    <span></span>
    <span></span>
  </div>
`

export default numberButtonTemplate
