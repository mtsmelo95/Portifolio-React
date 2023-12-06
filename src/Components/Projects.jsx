import "./Projects.css";

const Projects = () => {
  return (
    <div id="Projects" className="projectComponent">
      <div className="conteudo__geral">
        <h1>Projects</h1>

        <div className="elemento__sanfona">
          <div className="elemento__item">
            <input type="checkbox" id="toggle1" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle1">
              Currency Converter
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Conversor de moedas desenvolvido em HTML, CSS e JS.{" "}
                <a href="https://github.com/mtsmelo95/currencyConverter" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle2" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle2">
              Simple Calculator
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Simple calculator, desenvolved in HTML, CSS and JS.{" "}
                <a href="https://github.com/mtsmelo95/Calculator" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle3" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle3">
              Cloud Temps
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in React.JS e CSS.{" "}
                <a href="https://github.com/mtsmelo95/CloudTemps" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle4" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle4">
              Calculator React/TS
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in React.TS, CSS, Node.JS, MongoDB{" "}
                <a href="https://github.com/mtsmelo95/CalculatorReact.TS" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle5" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle5">
               Landing Page
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in HTML, CSS e JS{" "}
                <a href="https://github.com/mtsmelo95/LandingPage" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle6" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle6">
              ToDo List
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in HTML e CSS{" "}
                <a href="https://github.com/mtsmelo95/ToDoList" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle7" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle7">
              Simple Form
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in HTML e CSS{" "}
                <a href="https://github.com/mtsmelo95/formHTML" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
          <div className="elemento__item">
            <input type="checkbox" id="toggle8" className="toggle" />
            <label className="elemento__item-titulo" htmlFor="toggle8">
              IMC Calculator
            </label>
            <div className="elemento__item-conteudo">
              <p>
                Aplication web, desenvolved in React.JS, CSS{" "}
                <a href="https://github.com/mtsmelo95/CalculadoraIMC" target="_blank" rel="noopener noreferrer">
                  <button>Go to Github</button>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
