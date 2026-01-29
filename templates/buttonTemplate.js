const buttonTemplate = document.createElement("template");

buttonTemplate.innerHTML = `
  <style>
    .key-content-container {
      display: flex;
      flex-direction: column;
      line-height: 1;
      height: 100%;
      justify-content: space-evenly;
    }

    .key-content-container .secondary-letter {
      font-size: 20px;
      text-align: right;
    }

    .sub-container {
      display: flex;
      justify-content: space-between;
    }

    .sub-container span:nth-of-type(2) {
      font-size: 22px;
      color: #cb5353;
    }
  </style>

  <div class="key-content-container">
    <div class="sub-container">
      <span class="english-letter"></span>
      <span class="primary-letter"></span>
    </div>
    
    <span class="secondary-letter"></span>
  </div>
`;

export default buttonTemplate;
