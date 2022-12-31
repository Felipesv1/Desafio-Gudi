import React from "react";
import Title from "../../img/Title.png";

export default function Header() {
  return (
    <header>
      <div className="box-title">
        <img src={Title} />
      </div>
      <div className="box-nav">
        <nav>
          <ul>
            <li>Sobre</li>
            <li>Benefícios</li>
            <li>Contatos</li>
            <li>
              <button>AGENDAR</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
