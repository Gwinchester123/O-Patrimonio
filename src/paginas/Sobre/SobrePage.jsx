import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./SobrePage.css";
import bannerImage from "../../assets/header_1280x560.png";

const pilares = [
  {
    title: "Preservação",
    text: "Documentamos e compartilhamos histórias, saberes e expressões que fazem parte da identidade local.",
  },
  {
    title: "Memória",
    text: "Reunimos registros e relatos para manter viva a memória de Limoeiro do Norte e do seu povo.",
  },
  {
    title: "Comunidade",
    text: "Valorizamos as pessoas, os territórios e as tradições que constituem a cultura do município.",
  },
  {
    title: "Acesso",
    text: "Criamos um espaço digital acessível para conhecer o patrimônio cultural de forma simples e inspiradora.",
  },
];

export default function SobrePage() {
  return (
    <div className="about-page">
      <Header />

      <main id="main-content" className="about-shell" tabIndex={-1}>
        <section className="about-hero">
          <div className="about-hero-copy">
            <span className="eyebrow">O PROJETO</span>
            <h1>
              Sobre <em>O Patrimônio</em>
            </h1>
            <p>
              O Patrimônio é um portal dedicado à preservação e divulgação das
              manifestações culturais, tradições e memórias de Limoeiro do Norte, no
              Ceará.
            </p>

            <div className="about-actions">
              <Link className="button button-primary" to="/">
                Voltar para a home
              </Link>
              <Link className="button button-outline" to="/galeria">
                Ver galeria
              </Link>
            </div>
          </div>

          <div className="about-hero-visual">
            <img src={bannerImage} alt="Paisagem e cultura de Limoeiro do Norte" />
          </div>
        </section>

        <section className="about-section">
          <div className="section-heading">
            <span className="eyebrow">Pilares do projeto</span>
            <h2>Tradições, memória e comunidade em diálogo</h2>
          </div>

          <div className="about-grid">
            {pilares.map((item) => (
              <article className="about-card" key={item.title}>
                <span className="card-line"></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-story">
          <div className="story-copy">
            <span className="eyebrow">Nossa intenção</span>
            <h2>Um espaço para conhecer a cultura viva do território</h2>
          </div>

          <div className="story-texts">
            <p>
              Trata-se de um projeto acadêmico e cultural com o objetivo de reunir
              registros, relatos e imagens que ajudam a compreender as expressões
              tradicionais que ainda fazem parte da vida cotidiana do município.
            </p>
            <p>
              A proposta é valorizar não apenas os bens materiais, mas também os
              saberes, as festas, os personagens, as memória e as histórias que
              conectam as comunidades ao seu território e à sua identidade.
            </p>
            <p>
              Ao criar um espaço digital organizado e acessível, o projeto busca
              ampliar o alcance do patrimônio cultural local e incentivar a sua
              continuidade, reconhecimento e cuidado.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
