import { Link } from "react-router-dom";
import "./Acervo.css";

export default function AcervoPage() {
  return (
    <main id="main-content" className="event-page" tabIndex={-1}>
      <div className="event-page-inner">
        <span className="event-meta">Acervo Histórico</span>
        <h1>Acervo Histórico</h1>

        <p>
          O acervo reúne registros, narrativas e imagens que documentam os saberes,
          práticas e memórias do povo de Limoeiro do Norte.
        </p>

        <p>
          A partir dessas fontes, é possível compreender melhor a cultura local e a
          forma como as manifestações continuam sendo vividas e transmitidas ao longo
          do tempo.
        </p>

        <ul className="acervo-list">
          <li>Manifestações culturais</li>
          <li>Memórias e histórias locais</li>
          <li>Documentos e registros visuais</li>
          <li>Patrimônio cultural do território</li>
        </ul>

        <Link className="button button-primary" to="/">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}
