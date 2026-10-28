import "./Banner.css";
import bannerImage from "../../assets/header_1280x560.png";

export default function Banner() {
  return (
    <section className="hero" id="inicio">
      <img className="hero-background" src={bannerImage} alt="" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="eyebrow light">
          LIMOEIRO DO NORTE · CEARÁ · BRASIL
        </span>

        <h1>
          O{" "}
          <em>Patrimônio</em>
        </h1>

        <p className="hero-subtitle">
          Materiais e Imateriais de Limoeiro do Norte.
        </p>

        <a className="button button-primary" href="#manifestacoes">
          Conheça as manifestações <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
