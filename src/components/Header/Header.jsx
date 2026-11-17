import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="topbar">
      <Link className="brand" to="/" onClick={closeMenu}>
        <img src="/patrimonio-logo.png" alt="O Patrimônio" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? "nav-open" : ""}
        aria-label="Navegação principal"
      >
        <Link to="/" onClick={closeMenu}>Início</Link>
        <a href="/#manifestacoes" onClick={closeMenu}>Manifestações</a>
        <Link to="/galeria" onClick={closeMenu}>Galeria</Link>
        <Link to="/acervo" onClick={closeMenu}>Acervo</Link>
        <Link to="/sobre" onClick={closeMenu}>Sobre</Link>
      </nav>
    </header>
  );
}
