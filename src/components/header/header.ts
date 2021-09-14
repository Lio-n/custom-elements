export const init = () => {
  class Header extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
        .header{
            background-color: #FF8282;
            width: 100%;
            min-height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .header__title{
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 22px;
            margin: 0;
        }
        `;
      shadow.appendChild(style);

      //Element .header__title
      const h2El = document.createElement("h2");
      h2El.classList.add("header__title");
      h2El.textContent = "Header";

      //Element .header
      const headerEl = document.createElement("header");
      headerEl.classList.add("header");
      headerEl.appendChild(h2El);

      shadow.appendChild(headerEl);
    }
  }
  customElements.define("custom-header", Header);
};
