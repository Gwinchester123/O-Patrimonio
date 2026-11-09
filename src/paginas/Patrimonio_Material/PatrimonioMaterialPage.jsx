import { Link } from "react-router-dom";
import CharacterViewer from "../../components/CharacterViewer/CharacterViewer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import patrimonioMaterial from "../../assets/header_1280x560.png";
import "./PatrimonioMaterial.css";

const characteristics = [
  {
    number: "01",
    title: "Edificações",
    description:
      "Construções e referências arquitetônicas que integram a paisagem e a memória local.",
  },
  {
    number: "02",
    title: "Lugares de memória",
    description:
      "Espaços relacionados às histórias, às vivências e às referências da comunidade.",
  },
  {
    number: "03",
    title: "Bens e objetos",
    description:
      "Objetos e acervos materiais que ajudam a documentar diferentes épocas e experiências.",
  },
];

const people = [
  { title: "Pessoa / grupo de referência", description: "Perfil em preparação" },
  { title: "Pesquisador ou guardião", description: "Perfil em preparação" },
  { title: "Voz da comunidade", description: "Perfil em preparação" },
];

const records = [
  { type: "Fotografia", title: "Registro 01" },
  { type: "Vídeo", title: "Registro 02" },
  { type: "Documento", title: "Registro 03" },
];

export default function PatrimonioMaterialPage() {
  return (
    <div className="louceiras-page patrimonio-material-page">
      <Header />

      <main className="louceiras-shell">
        <div className="louceiras-breadcrumb">
          <Link to="/">Início</Link>
          <span aria-hidden="true">/</span>
          <a href="/#manifestacoes">Manifestações</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Patrimônio Material</span>
        </div>

        <section className="louceiras-intro">
          <div>
            <span className="louceiras-kicker">Manifestações culturais</span>
            <h1>Patrimônio Material</h1>
          </div>
        </section>

        <figure className="louceiras-hero">
          <img
            src={patrimonioMaterial}
            alt="Paisagem urbana e construções de Limoeiro do Norte"
          />
        </figure>

        <section className="louceiras-history">
          <div className="louceiras-copy">
            <span className="louceiras-kicker">História</span>
            <h2>História e referências</h2>
            <p>
              O Patrimônio Material reúne bens, lugares e construções que ajudam a
              contar a história e as transformações do território. Seus registros
              permitem reconhecer referências presentes na paisagem e nas memórias
              da comunidade.
            </p>
          </div>

          <aside className="louceiras-highlight">
            <span>Em construção / escuta colaborativa</span>
            <p>
              Espaço reservado para contextualização, identificação dos bens e
              validação das informações com a comunidade.
            </p>
            <Link to="/acervo">Contribuir com um relato →</Link>
          </aside>
        </section>

        <section className="louceiras-section">
          <div className="louceiras-section-heading">
            <span className="louceiras-kicker">Importância cultural</span>
            <h2>Características e importância</h2>
            <p>
              Diferentes referências materiais podem ser registradas, pesquisadas e
              relacionadas às histórias do território.
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
              <p>Perfis e vozes que ajudam a contar a história do patrimônio local.</p>
            </div>
          </div>

          <CharacterViewer
            characters={people}
            gridClassName="louceiras-people"
            cardClassName="louceiras-person"
            imageClassName="louceiras-person-avatar"
          />
        </section>

        <section className="louceiras-section louceiras-records-section">
          <div className="louceiras-section-heading louceiras-records-heading">
            <div>
              <span className="louceiras-kicker">Acervo</span>
              <h2>Registros relacionados</h2>
              <p>Imagens, vídeos e documentos associados ao Patrimônio Material.</p>
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
