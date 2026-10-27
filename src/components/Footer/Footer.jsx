import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="acervo">
      <div>
        <strong>O Patrimônio</strong>

        <p>
          Cultura e memória de Limoeiro do Norte reunidas em um portal feito
          para conhecer, preservar e compartilhar.
        </p>
      </div>

      <div>
        <span className="footer-title">CONTATO</span>

        <p>
          <a href="mailto:email@exemplo.com">email@exemplo.com</a>
        </p>
      </div>

      <div className="footer-bottom">
        <span>© O Patrimônio · projeto de portal cultural</span>

        <span>Limoeiro do Norte · Ceará</span>
      </div>
    </footer>
  );
}
