import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import boiPaiDoCampo from "../../assets/boi_pai_do_campo.png";
import fogosa from "../../assets/fogosa.jpeg";
import louceiras from "../../assets/louceiras.jpeg";
import patrimonioMaterial from "../../assets/header_1280x560.png";

const manifestations = [
  {
    title: "Boi Pai do Campo",
    image: boiPaiDoCampo,
    link: "/boi-pai-do-campo",
    description:
      "Memórias, personagens e registros de uma manifestação da cultura local.",
  },
  {
    title: "Louceiras",
    image: louceiras,
    link: "/louceiras",
    description:
      "Saberes manuais, histórias de vida e vínculos com o território.",
  },
  {
    title: "Fogosa",
    image: fogosa,
    link: "/fogosa",
    description:
      "Relatos, imagens e registros reunidos para preservar sua memória.",
  },
  {
    title: "Patrimônio Material",
    image: patrimonioMaterial,
    link: "/patrimonio-material",
    description:
      "Lugares, construções e referências materiais que compõem a memória do território.",
  },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function Main() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Banner />

      <section className="manifestations section" id="manifestacoes">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MANIFESTAÇÕES CULTURAIS</span>

            <h2>Histórias que vivem no território</h2>

            <p>
              Conheça expressões culturais prioritárias reunidas pelo Limoeiro Conta.
            </p>
          </div>

          <a className="small-link" href="#galeria">
            Ver todas <Arrow />
          </a>
        </div>

        <div className="cards">
          {manifestations.map((item) => (
            <Link className="card" to={item.link} key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="card-body">
                <span className="card-line"></span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <span className="card-cta">
                  Conhecer manifestação <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-copy">
          <span className="eyebrow">O PROJETO</span>

          <h2>
            Sobre <em>O Patrimônio</em>
          </h2>

          <p>
            O Patrimônio é um portal dedicado à preservação e divulgação das
            manifestações tradicionais de Limoeiro do Norte, município
            localizado na região do Baixo Jaguaribe, no Ceará.
          </p>

          <p>
            Trata-se de um projeto acadêmico, desenvolvido com o objetivo de
            criar um espaço digital acessível onde visitantes possam conhecer as
            manifestações, suas histórias e suas expressões atuais.
          </p>

          <Link className="button button-outline" to="/sobre">
            Saiba mais sobre o projeto
          </Link>
        </div>

        <div className="about-image">
          <div className="image-placeholder">
            <span>▧</span>

            <small>IMAGEM</small>
          </div>
        </div>
      </section>

      <section className="gallery-cta section" id="galeria">
        <span className="eyebrow">GALERIA E ACERVO</span>

        <h2>Explore o acervo e a galeria</h2>

        <p>
          Fotografias, registros históricos e documentos sobre a cultura de
          Limoeiro do Norte.
        </p>

        <div className="cta-actions">
          <Link className="button button-primary" to="/galeria">
            Ver Galeria <Arrow />
          </Link>

          <Link className="button button-outline" to="/acervo">
            Acervo Histórico <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
