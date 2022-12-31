import React from "react";
import balao from "../../img/balao.png";
import montanha from "../../img/montanha.png";
import mar from "../../img/mar.png";
import paieFilho from "../../img/pai_filho.png";
import pulo from "../../img/pulo.png";
import dono from "../../img/dono.png";
import sorriso from "../../img/sorriso.png";
import bicicleta from "../../img/bicicleta.png";
import mulheres from "../../img/mulheres.png";
import melhor from "../../img/oMelhor.png";
import cidades from "../../img/cidades.png";
import coco from "../../img/coco.png";
import restaurantes from "../../img/restaurantes.png";

export default function Main() {
  return (
    <main>
      <section className="box-search">
        <div className="search">
          <h1>Para qual estado você deseja ir?</h1>
          <input type="search" placeholder="Pesquisar" />
          <div>
            <button>BUSCAR</button>
          </div>
        </div>
      </section>
      <section className="box-cards">
        <img src={balao} alt="um casal  em um por do sol com baloes ao redor" />
        <div className="card1">
          <div className="conteudo">
            <h6>
              <span></span> VIAGENS NACIONAIS
            </h6>
            <h1>O clima perfeito, no lugar perfeito</h1>
            <p>
              Planeje sua viagem com a sua paquera, compartilhar momentos
              preciosos juntos não tem preço.
            </p>
            <button>AGENDAR</button>
          </div>
        </div>
      </section>
      <section className="box-cards">
        <div className="card2">
          <div className="conteudo2">
            <h6>
              <span></span> VIAGENS NACIONAIS
            </h6>
            <h1>Curta uma nova vibe entre amigos</h1>
            <p>
              Rachando a conta ou rachando o bico, a melhor hora pra curtir é
              entre amigos. Conheça nossos <b>Planos Multi.</b>{" "}
            </p>
            <button>AGENDAR</button>
          </div>
        </div>
        <img src={montanha} alt="Quatro pessoas alegres na montanha" />
      </section>
      <section className="box-cards">
        <img src={mar} alt="Quatro pessoas alegres na montanha" />
        <div className="card3">
          <div className="conteudo3">
            <h6>
              <span></span> VIAGENS NACIONAIS
            </h6>
            <h1>Algumas experiências são inexplicáveis</h1>
            <p>
              Conheça as fontes termais de <b>Caldas Novas, Goiás.</b> Águas
              quentes, num clima sereno, relaxante e natural.{" "}
            </p>
            <button>AGENDAR</button>
          </div>
        </div>
      </section>
      <section className="locais">
        <div className="rio_de_janeiro">
          <h6>RIO DE JANEIRO</h6>
        </div>
        <div className="rio_das_ostras">
          <h6>RIO DAS OSTRAS</h6>
        </div>
        <div className="caldas_novas">
          <h6>CALDAS NOVAS</h6>
        </div>
        <div className="amazonia">
          <h6>AMAZÔNIA</h6>
        </div>
      </section>
      <section className="Container-mural">
        <div className="mural">
          <h5>use a hashtag #brasilisverigudi</h5>
          <h1>Nosso mural de Experiências</h1>
          <div className="fotos">
            <img src={paieFilho} alt="pai e filho se divertindo" />
            <img src={pulo} alt="pessoas pulando" />
            <img src={dono} alt="cachorro e seu dono tirando uma foto" />
            <img src={sorriso} alt="homem sorrindo" />
            <img src={bicicleta} alt="uma mulger numa bicicleta sorrindo " />
            <img src={mulheres} alt="Mulheres sorrindo" />
          </div>
          <div className="cards-informativos">
            <div className="card_1">
              <img src={melhor} alt="icone de viajem" />
              <h4> O melhor do Brasil</h4>
            </div>
            <div className="card_2">
              <img src={cidades} alt="icone de cidades" />
              <h4> Cidades mais frequentadas</h4>
            </div>
            <div className="card_3">
              <img src={coco} alt="icone de um coco" />
              <h4>Pontos turísticos</h4>
            </div>
            <div className="card_4">
              <img src={restaurantes} alt="icone de cardapio" />
              <h4> Restaurantes</h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
