import { Link } from "react-router-dom";
import "./Boi_Pai_do_Campo.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CharacterViewer from "../../components/CharacterViewer/CharacterViewer";
import boiPaiDoCampo from "../../assets/boi_pai_do_campo.png";
import mestreChico from "../../imagens/Boi_Pai_do_Campo/Personagens Relacionados/Mestre Chico.jpg";
import nossoBoi from "../../imagens/Boi_Pai_do_Campo/Personagens Relacionados/Nosso boi.png";
import doutorDoBoi from "../../imagens/Boi_Pai_do_Campo/Personagens Relacionados/Dr.do Boi .png";

const personagens = [
  { nome: "Mestre Chico", imagem: mestreChico },
  { nome: "Nosso Boi", imagem: nossoBoi },
  { nome: "Dr. Boi", imagem: doutorDoBoi },
];

const registros = [
  { label: "Fotografia", title: "Boi Pai do Campo" },
  { label: "Documento", title: "Memória e tradições" },
];

const videos = [
  { id: "ZsdBxKsUSEI", title: "Vídeo do Boi Pai do Campo 1" },
  { id: "NI51oaLPP2A", title: "Vídeo do Boi Pai do Campo 2" },
  { id: "hraeDwQihq4", title: "Vídeo do Boi Pai do Campo 3" },
  { id: "DGPtkb6u0l8", title: "Vídeo do Boi Pai do Campo 4" },
  { id: "uPd7uysCLZs", title: "Vídeo do Boi Pai do Campo 5" },
];

export default function BoiPaiDoCampoPage() {
  return (
    <div className="manifestation-page">
      <Header />

      <main className="manifestation-shell">
        <div className="manifestation-topline">
          <span>Manifestações</span>
          <span className="manifestation-slash">/</span>
          <span>Boi Pai do Campo</span>
        </div>

        <section className="manifestation-header">
          <div className="manifestation-title-wrap">
            <span className="manifestation-kicker">Manifestações culturais</span>
            <h1>Boi Pai do Campo</h1>
          </div>
        </section>

        <div className="manifestation-image-box">
          <img src={boiPaiDoCampo} alt="Boi Pai do Campo" />
        </div>

        <section className="manifestation-row">
          <div className="manifestation-copy">
            <h2>História e origem</h2>
            <p>
              O Boi Pai do Campo surgiu em 1980, na comunidade de Faceira, a partir da
              iniciativa de João Vicente da Costa, conhecido como João Caboclo, e seu
              sobrinho Francisco das Chagas da Costa, o Mestre Chico. A manifestação tem
              suas origens nas antigas brincadeiras de bumba meu boi trazidas ao Vale do
              Jaguaribe por trabalhadores baianos no início do século XX.
            </p>
            <p>
              Após o falecimento de João Caboclo, em 2002, Mestre Chico assumiu a missão
              de dar continuidade à tradição, contando com o apoio e a participação da
              comunidade. Com aproximadamente 25 brincantes, o folguedo reúne personagens
              como o boi, a burrinha, o bode, a ema e o jaguá, acompanhados por músicas e
              ritmos tradicionais que dão vida à brincadeira.
            </p>
            <p>
              Em 2005, Mestre Chico recebeu do Governo do Estado do Ceará o título de
              Tesouro Vivo da Cultura Tradicional Cearense, reconhecimento da importância
              de seu trabalho na preservação dessa manifestação popular.
            </p>
            <p>
              Ao longo dos anos, o Boi Pai do Campo tornou-se parte da identidade
              cultural de Faceira, representando a união, a memória e a alegria de uma
              comunidade que mantém viva essa tradição de geração em geração.
            </p>
          </div>
        </section>

        <section className="manifestation-section">
          <h2>Personagens relacionados</h2>
          <CharacterViewer
            characters={personagens}
            gridClassName="manifestation-person-grid"
            cardClassName="manifestation-person-card"
            imageClassName="manifestation-person-figure"
            titleTag="strong"
          />
        </section>

        <section className="manifestation-section">
          <div className="manifestation-header-inline">
            <h2>Registros relacionados</h2>
            <Link className="manifestation-link" to="/galeria">
              Ver galeria
            </Link>
          </div>

          <div className="manifestation-record-sections">
            <section className="manifestation-record-category">
              <h3 className="manifestation-record-category-title">Fotografia</h3>
              <div className="manifestation-record-grid">
                <article className="manifestation-record-card">
                  <span>{registros[0].label}</span>
                  <h3>{registros[0].title}</h3>
                </article>
              </div>
            </section>

            <section className="manifestation-record-category">
              <h3 className="manifestation-record-category-title">Vídeos</h3>
              <div className="manifestation-video-grid" aria-label="Vídeos do Boi Pai do Campo">
                {videos.map((video) => (
                  <article className="manifestation-video-card" key={video.id}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                      title={video.title}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </article>
                ))}
              </div>
            </section>

            <section className="manifestation-record-category">
              <h3 className="manifestation-record-category-title">Documentos</h3>
              <div className="manifestation-record-grid">
                <article className="manifestation-record-card">
                  <span>{registros[1].label}</span>
                  <h3>{registros[1].title}</h3>
                </article>
              </div>
            </section>
          </div>
        </section>

        <div className="manifestation-actions">
          <Link className="button button-primary" to="/">
            Voltar para a home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
