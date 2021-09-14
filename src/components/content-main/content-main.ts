export const init = () => {
  /* CLASS MAIN */
  class Main extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
      p,h2,h1{margin: 0;}

        .main{
          font-family: 'Roboto', sans-serif;
          margin: 0 auto;
          padding: 3rem 2rem;
          max-width: 600px;
        }
        .main__title{
          font-size: 52px;
          margin-bottom: 3rem;
        }

        .subtitle__title{
            font-size: 28px;
            margin: 2rem 0;
            font-weight: 700;
          }
        
        .subtitle__paragrph{
          font-size: 18px;
          margin-bottom: 2rem;
        }
        
        .main__medium-paragrph{
          font-size: 22px;
          font-weight: 500;
          margin: 4rem;
        }  
        `;
      shadow.appendChild(style);

      //Element .main__title
      const h1El = document.createElement("h1");
      h1El.classList.add("main__title");
      h1El.textContent = "Título de esta página";

      const pEl = document.createElement("p");
      pEl.textContent = "Esta página sin dudas es la mejor";

      //Element .main
      const mainEl = document.createElement("div");
      mainEl.classList.add("main");

      //Add Elements
      mainEl.appendChild(h1El);
      mainEl.appendChild(h1El);
      mainEl.appendChild(pEl);
      mainEl.appendChild(this.subtitle());
      const clone = pEl.cloneNode(true);
      clone.classList.add("main__medium-paragrph");
      clone.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
      mainEl.appendChild(clone);
      mainEl.appendChild(this.subtitle());

      shadow.appendChild(mainEl);
      if (this.children[0]) {
        mainEl.appendChild(this.children[0]);
      }
    }
    //Add Component Subtitle
    subtitle() {
      const h2El = document.createElement("h2");
      h2El.classList.add("subtitle__title");
      h2El.textContent = "Subtítulo";

      const pEl = document.createElement("p");
      pEl.classList.add("subtitle__paragrph");
      pEl.textContent =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?";

      const subEl = document.createElement("div");

      //Add Elements
      subEl.appendChild(h2El);
      subEl.appendChild(pEl);

      //Clono el Element pEl
      const clone = pEl.cloneNode(true);
      subEl.appendChild(clone);

      return subEl;
    }
  }
  customElements.define("content-main", Main);

  /* CLASS FORM */
  class Form extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });

      const style = document.createElement("style");
      style.textContent = `
      p,h2,h1{margin: 0;}

      .form{
        margin: 4rem auto;
        display: flex;
        flex-direction: column;
        min-width: 320px;
        max-width: 352px;
      }
      .form__span{
        font-size: 18px;
        display: block;
        margin-bottom: 5px;
      }
      .border{
        font-family: 'Roboto', sans-serif;
        font-size: 22px;
        border-radius: 4px;
        width: 100%;
        height: 55px;
        border: none; 
      }
      .form__input{
        padding: 0;
      }
      .form__button{
        background: #9CBBE9;
        border: none;
        margin: 2rem 0;
      }
      .form__button-enviar{
        border: 2px solid;
      }
        `;
      shadow.appendChild(style);

      const formEl = document.createElement("form");
      formEl.classList.add("form");
      formEl.innerHTML = `
         <!--Contact-Form__Name-->
          <label>
            <span class="form__span">Nombre</span>
            <input type="text" class="form__input border " />
          </label>

          <button class="form__button border" >Button</button>

          <button class="form__button-enviar border" >Enviar</button>
      `;
      shadow.appendChild(formEl);
    }
  }
  customElements.define("custom-form", Form);
};
