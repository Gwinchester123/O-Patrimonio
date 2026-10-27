import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import louceiras from "../../assets/louceiras.jpeg";
import "./Louceiras.css";

const characteristics = [
  {
    number: "01",
    title: "Saberes do cotidiano",
    description:
      "Aprendizagens e conhecimentos presentes nos relatos e nas referências do acervo.",
  },
  {
    number: "02",
    title: "Feito à mão",
    description:
      "Práticas ligadas ao fazer artesanal e aos saberes transmitidos entre gerações.",
  },
  {
    number: "03",
    title: "Identidade e território",
    description:
      "Uma expressão cultural que aproxima histórias, pessoas e o território.",
  },
];

const people = [
  { title: "Família Braúna", description: "Louceiras" },
  { title: "Família Pequeno", description: "Louceiras" },
];

const records = [
  { type: "Fotografia", title: "Registro 01" },
  { type: "Vídeo", title: "Registro 02" },
  { type: "Documento", title: "Registro 03" },
];

export default function LouceirasPage() {
  return (
    <div className="louceiras-page">
      <Header />

      <main className="louceiras-shell">
        <div className="louceiras-breadcrumb">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <a href="/#manifestacoes">Manifestações</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Louceiras</span>
        </div>

        <section className="louceiras-intro">
          <div>
            <span className="louceiras-kicker">Manifestações culturais</span>
            <h1>Louceiras</h1>
          </div>
        </section>

        <figure className="louceiras-hero">
          <img src={louceiras} alt="Registro da manifestação cultural Louceiras" />
        </figure>

        <section className="louceiras-history">
          <div className="louceiras-copy">
            <h2>História e origem</h2>
            <p>
              Sua trajetória reúne relatos, referências e memórias sobre a presença
              da manifestação em Limoeiro do Norte. O contexto histórico está sendo
              construído a partir de pesquisa e escuta da comunidade, sem ampliar
              fatos ainda não documentados.
            </p>
          </div>

          <aside className="louceiras-highlight">
            <span>Em construção / escuta comunitária</span>
            <p>
              Espaço reservado para contextualização, depoimentos e futuras
              validações com o grupo de referência.
            </p>
            <Link to="/acervo">Conheça o acervo →</Link>
          </aside>
        </section>

        <section className="louceiras-section">
          <div className="louceiras-section-heading">
            <span className="louceiras-kicker">Saberes e fazeres</span>
            <h2>Características e importância</h2>
            <p>
              Aspectos gerais que ajudam a organizar a pesquisa e os registros mais
              relevantes de explorar.
            </p>
          </div>

          <div className="louceiras-characteristics">
            {characteristics.map((item) => (
              <article className="louceiras-characteristic" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="louceiras-section">
          <div className="louceiras-section-heading louceiras-people-heading">
            <div>
              <span className="louceiras-kicker">Memória e comunidade</span>
              <h2>Personagens relacionados</h2>
              <p>Perfis e vozes que ajudam a contar esta manifestação.</p>
            </div>
          </div>

          <div className="louceiras-people">
            {people.map((person) => (
              <article className="louceiras-person" key={person.title}>
                <span className="louceiras-person-avatar" aria-hidden="true" />
                <div>
                  <h3>{person.title}</h3>
                  <p>{person.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="louceiras-section louceiras-records-section">
          <div className="louceiras-section-heading louceiras-records-heading">
            <div>
              <span className="louceiras-kicker">Acervo</span>
              <h2>Registros relacionados</h2>
              <p>Imagens, vídeos e documentos associados às Louceiras.</p>
            </div>
            <Link className="louceiras-gallery-link" to="/galeria">
              Ver na galeria <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="louceiras-records">
            {records.map((record) => (
              <Link
                className="louceiras-record"
                to="/galeria"
                key={record.title}
                aria-label={`${record.type}, ${record.title}: abrir galeria`}
              >
                <span>{record.type}</span>
                <h3>{record.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
