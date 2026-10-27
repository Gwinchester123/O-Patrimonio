import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import fogosa from "../../assets/fogosa.jpeg";
import "./Fogosa.css";

const characteristics = [
  {
    number: "01",
    title: "Encontro comunitário",
    description:
      "Práticas, histórias e memórias que fortalecem os registros, relatos e referências do acervo.",
  },
  {
    number: "02",
    title: "Memória viva",
    description:
      "Uma tradição que segue sendo lembrada e compartilhada por registros, relatos e referências do acervo.",
  },
  {
    number: "03",
    title: "Patrimônio cultural",
    description:
      "Uma expressão local que ajuda a preservar histórias, registros e referências da comunidade.",
  },
];

const people = [
  { title: "Personagem / grupo", description: "Perfil em preparação" },
  { title: "Mestra ou mestre", description: "Perfil em preparação" },
  { title: "Voz da comunidade", description: "Perfil em preparação" },
];

const records = [
  { type: "Fotografia", title: "Registro 01" },
  { type: "Vídeo", title: "Registro 02" },
  { type: "Documento", title: "Registro 03" },
];

export default function FogosaPage() {
  return (
    <div className="louceiras-page">
      <Header />

      <main className="louceiras-shell">
        <div className="louceiras-breadcrumb">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <a href="/#manifestacoes">Manifestações</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Fogosa</span>
        </div>

        <section className="louceiras-intro">
          <div>
            <span className="louceiras-kicker">Manifestação cultural</span>
            <h1>Fogosa</h1>
          </div>
        </section>

        <figure className="louceiras-hero">
          <img src={fogosa} alt="Registro da manifestação cultural Fogosa" />
        </figure>

        <section className="louceiras-history">
          <div className="louceiras-copy">
            <span className="louceiras-kicker">Contexto</span>
            <h2>História e origem</h2>
            <p>
              A Fogosa é uma expressão cultural marcada pela memória coletiva,
              pelos registros de vida e pela força dos símbolos que acompanham as
              comunidades do território.
            </p>
            <p>
              Sua presença materializa narrativas, experiências e tradições que
              contribuem para a preservação da identidade cultural local, reunindo
              histórias e experiências que continuam vivas na memória do povo.
            </p>
          </div>

          <aside className="louceiras-highlight">
            <span>Em construção / escuta colaborativa</span>
            <p>
              Espaço reservado para contextualização, depoimentos e futuras
              validações pela equipe do projeto.
            </p>
            <Link to="/acervo">Contribuir com um relato →</Link>
          </aside>
        </section>

        <section className="louceiras-section">
          <div className="louceiras-section-heading">
            <span className="louceiras-kicker">Leitura cultural</span>
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
              <span className="louceiras-kicker">Pessoas e memórias</span>
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
              <span className="louceiras-kicker">Galeria</span>
              <h2>Registros relacionados</h2>
              <p>Imagens, vídeos e documentos associados à Fogosa.</p>
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
