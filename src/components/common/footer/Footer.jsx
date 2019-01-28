import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  state = {
    nombre: "fd-atanasoff",
    web: "https://fd-atanasoff.netlify.com",
    year: new Date().getFullYear(),
    redes: [
      {
        link: "https://github.com/fedeatanasoff?tab=repositories",
        icon: "fab fa-github-square fa-2x",
        nombre: "github"
      },
      {
        link: "https://www.linkedin.com/in/fede-atanasoff/",
        icon: "fab fa-linkedin fa-2x",
        nombre: "linkedin"
      },
      {
        link: "https://www.instagram.com/fedeatanasoff/",
        icon: "fab fa-instagram fa-2x",
        nombre: "instagram"
      }
    ]
  };

  render() {
    const { nombre, web, year, redes } = this.state;
    return (
      <footer className="container footer-app mb-3">
        <div>
          <span className="rank">
            <i className="fas fa-copyright" />
          </span>
          &nbsp;<span className="footer-copy">{year}</span>
          &nbsp;
          <i className="fas fa-code rank" />
          &nbsp;
          <a
            href={web}
            className="red-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            {nombre}
          </a>
        </div>
        <div>
          {redes.map(red => (
            <a
              key={red.nombre}
              href={red.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="red-icon">
                <i className={red.icon} />
              </span>
            </a>
          ))}
        </div>
      </footer>
    );
  }
}

export default Footer;
