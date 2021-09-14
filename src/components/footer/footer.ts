export const init = () => {
  class Footer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
          .footer{
              background-color: #FFA0EA;
              width: 100%;
              height: 233px;
              display: flex;
              justify-content: center;
              align-items: center;
          }
          .footer__title{
              font-family: 'Roboto', sans-serif;
              font-weight: 500;
              font-size: 22px;
              margin: 0;
          }
          `;
      shadow.appendChild(style);

      //Element .footer__title
      const h2El = document.createElement("h2");
      h2El.classList.add("footer__title");
      h2El.textContent = "Footer";

      //Element .footer
      const footerEl = document.createElement("footer");
      footerEl.classList.add("footer");
      footerEl.appendChild(h2El);

      shadow.appendChild(footerEl);
    }
  }
  customElements.define("custom-footer", Footer);
};
