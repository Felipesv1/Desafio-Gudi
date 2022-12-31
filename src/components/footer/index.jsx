import React from "react";
import Title from "../../img/Title.png";
export default function Footer() {
  return (
    <footer>
      <section className="fale_conosco">
        <h1>Fale conosco</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Diga seu melhor email"
        />
        <input type="datetime" name="" id="" placeholder="Assunto" />
        <textarea
          className="mensagem"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escreva a sua mensagem"
        ></textarea>
        <button>ENVIAR</button>
      </section>
      <section className="box-infos">
        <div>
          <h4>
            <img src={Title} alt="titulo" />
          </h4>
          <ul>
            <li>Sobre nós</li>
            <li>Mural de memórias</li>
            <li> Eventos Gudi</li>
            <li>Nosso blog</li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <ul>
            <li>Chat Virtual </li>
            <li>SAC Online</li>
            <li> Ouvidoria</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h4>Benefícios</h4>
          <ul>
            <li>Conta digital Gudi </li>
            <li> Viaje com Milhas</li>
            <li> C6 Átomos</li>
            <li>iD Jovem</li>
          </ul>
        </div>
        <div>
          <h4>Lugares</h4>
          <ul>
            <li>O melhor do Brasil </li>
            <li>Cidades frequentes</li>
            <li> Pontos turísticos</li>
            <li>Restaurantes</li>
          </ul>
        </div>
        <div>
          <h4>Curiosidades</h4>
          <ul>
            <li>Cultura e tradições </li>
            <li>Pratos típicos</li>
            <li> Mitos brasileiros</li>
            <li>C arnaval</li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
