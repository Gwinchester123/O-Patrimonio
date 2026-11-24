import { useLayoutEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import PaginaInicial from "./paginas/Pagina_Inicial/Pagina_Inicial";
import BoiPaiDoCampoPage from "./paginas/Boi_Pai_do_Campo/BoiPaiDoCampoPage";
import LouceirasPage from "./paginas/Louceiras/LouceirasPage";
import FogosaPage from "./paginas/Fogosa/FogosaPage";
import PatrimonioMaterialPage from "./paginas/Patrimonio_Material/PatrimonioMaterialPage";
import GalleryPage from "./paginas/Galeria/GalleryPage";
import AcervoPage from "./paginas/Acervo/AcervoPage";
import SobrePage from "./paginas/Sobre/SobrePage";
import TermosPage from "./paginas/Juridico/TermosPage";
import PrivacidadePage from "./paginas/Juridico/PrivacidadePage";
import VLibrasWidget from "./components/VLibrasWidget/VLibrasWidget";
import AccessibilityControls from "./components/AccessibilityControls/AccessibilityControls";

function ScrollManifestationToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (
      [
        "/boi-pai-do-campo",
        "/louceiras",
        "/fogosa",
        "/patrimonio-material",
        "/galeria",
        "/sobre",
        "/termos-de-uso",
        "/politica-de-privacidade",
      ].includes(pathname)
    ) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

function FocusMainOnNavigation() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useLayoutEffect(() => {
    const heading = document.querySelector("#main-content h1");
    if (heading) {
      document.title = `${heading.textContent.trim()} | O Patrimônio`;
    }

    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>
      <ScrollManifestationToTop />
      <FocusMainOnNavigation />
      <div className="accessibility-tools">
        <VLibrasWidget />
        <AccessibilityControls />
      </div>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/boi-pai-do-campo" element={<BoiPaiDoCampoPage />} />
        <Route path="/louceiras" element={<LouceirasPage />} />
        <Route path="/fogosa" element={<FogosaPage />} />
        <Route path="/patrimonio-material" element={<PatrimonioMaterialPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acervo" element={<AcervoPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/termos-de-uso" element={<TermosPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacidadePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;