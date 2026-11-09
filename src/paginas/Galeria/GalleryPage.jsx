import { useRef, useState } from "react";
import ImageViewer from "../../components/ImageViewer/ImageViewer";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Galeria.css";
import boiPaiDoCampo from "../../assets/boi_pai_do_campo.png";
import fogosa from "../../assets/fogosa.jpeg";
import louceiras from "../../assets/louceiras.jpeg";
import patrimonioMaterial from "../../assets/header_1280x560.png";

const brincantesPhotos = import.meta.glob(
  "../../imagens/Boi_Pai_do_Campo/Brincantes do Boi/*.{jpg,jpeg,png}",
  { eager: true, import: "default" },
);

const filters = ["Todos", "Boi Pai do Campo", "Louceiras", "Fogosa", "Patrimônio Material"];

const galleryEntries = [
  ...Object.entries(brincantesPhotos)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([path, image], index) => {
      const fileName = path.split("/").pop().replace(/\.[^.]+$/, "");
      const title = fileName
        .replace(/[_-]+/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      return {
        category: "Boi Pai do Campo",
        title: title.charAt(0).toUpperCase() + title.slice(1),
        type: "Fotografia",
        meta: `Brincante ${index + 1}`,
        image,
        imageAlt: `Brincante do Boi: ${fileName}`,
        link: "/boi-pai-do-campo",
      };
    }),
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 04", image: fogosa, link: "/fogosa" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 02", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 05", image: louceiras, link: "/louceiras" },
  { category: "Patrimônio Material", title: "Registro fotográfico do patrimônio", type: "Fotografia", meta: "Registro 01", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Patrimônio Material", title: "Registro fotográfico do patrimônio", type: "Fotografia", meta: "Registro 04", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 01", image: fogosa, link: "/fogosa" },
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 05", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Louceiras", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 03", image: louceiras, link: "/louceiras" },
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 06", image: fogosa, link: "/fogosa" },
  { category: "Patrimônio Material", title: "Registro audiovisual do patrimônio", type: "Vídeo", meta: "Registro 02", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Patrimônio Material", title: "Registro fotográfico do patrimônio", type: "Fotografia", meta: "Registro 05", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 01", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 03", image: fogosa, link: "/fogosa" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 01", image: louceiras, link: "/louceiras" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 06", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Patrimônio Material", title: "Documento relacionado ao patrimônio", type: "Documento", meta: "Registro 03", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Patrimônio Material", title: "Registro fotográfico do patrimônio", type: "Fotografia", meta: "Registro 06", image: patrimonioMaterial, link: "/patrimonio-material" },
  { category: "Fogosa", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 02", image: fogosa, link: "/fogosa" },
  { category: "Louceiras", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 06", image: louceiras, link: "/louceiras" },
  { category: "Boi Pai do Campo", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 04", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Fogosa", title: "Registro audiovisual da manifestação", type: "Vídeo", meta: "Registro 05", image: fogosa, link: "/fogosa" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 02", image: louceiras, link: "/louceiras" },
  { category: "Boi Pai do Campo", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 03", image: boiPaiDoCampo, link: "/boi-pai-do-campo" },
  { category: "Louceiras", title: "Registro fotográfico da manifestação", type: "Fotografia", meta: "Registro 04", image: louceiras, link: "/louceiras" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const imageOpenerRef = useRef(null);
  const itemsPerPage = 6;

  const filteredEntries =
    activeFilter === "Todos"
      ? galleryEntries
      : galleryEntries.filter((entry) => entry.category === activeFilter);
  const selectedEntry =
    selectedImageIndex === null ? null : filteredEntries[selectedImageIndex];

  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);
  const visibleEntries = filteredEntries.slice((safePage - 1) * itemsPerPage, safePage * itemsPerPage);
  const visiblePageCount = Math.min(5, totalPages);
  const firstVisiblePage = Math.max(
    1,
    Math.min(
      safePage - Math.floor(visiblePageCount / 2),
      totalPages - visiblePageCount + 1,
    ),
  );
  const visiblePages = Array.from(
    { length: visiblePageCount },
    (_, index) => firstVisiblePage + index,
  );
  const lastVisiblePage = firstVisiblePage + visiblePageCount - 1;
  const pageItems = [
    ...(firstVisiblePage > 1
      ? [1, ...(firstVisiblePage > 2 ? ["start-ellipsis"] : [])]
      : []),
    ...visiblePages,
    ...(lastVisiblePage < totalPages
      ? [...(lastVisiblePage < totalPages - 1 ? ["end-ellipsis"] : []), totalPages]
      : []),
  ];

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setSelectedImageIndex(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <div className="gallery-page">
      <Header />

      <main className="gallery-shell">
        <div className="gallery-header">
          <div className="gallery-heading">
            <span className="gallery-kicker">GALERIA</span>
            <h1>Imagens e vídeos da cultura local</h1>
          </div>

        </div>

        <p className="gallery-intro">
          Selecione um filtro para encontrar imagens e vídeos de cada tradição local.
        </p>

        <div className="gallery-toolbar">
          <span className="gallery-label">Filtrar por:</span>

          <div className="gallery-filters" role="tablist" aria-label="Filtros da galeria">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={filter === activeFilter ? "filter-button active" : "filter-button"}
                onClick={() => handleFilterChange(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-grid">
          {visibleEntries.map((entry, index) => (
            <article className="gallery-card" key={`${entry.category}-${entry.meta}`}>
              <div className="gallery-card-top">
                <span className="gallery-card-tag">{entry.category}</span>
                <span className="gallery-card-count">{entry.count}</span>
              </div>

              <div className="gallery-card-thumb">
                <button
                  className="gallery-card-image-link"
                  type="button"
                  aria-label={`Abrir imagem: ${entry.title}`}
                  onClick={(event) => {
                    imageOpenerRef.current = event.currentTarget;
                    setSelectedImageIndex((safePage - 1) * itemsPerPage + index);
                  }}
                >
                  <img src={entry.image} alt={entry.imageAlt ?? entry.title} />
                </button>
              </div>

              <div className="gallery-card-body">
                <button
                  className="gallery-card-link"
                  type="button"
                  onClick={(event) => {
                    imageOpenerRef.current = event.currentTarget;
                    setSelectedImageIndex((safePage - 1) * itemsPerPage + index);
                  }}
                >
                  Abrir / ampliar
                </button>
              </div>
            </article>
          ))}
        </div>

        <nav className="gallery-pagination" aria-label="Paginação da galeria">
          <button
            type="button"
            className="page-button page-button-prev"
            aria-label="Página anterior"
            onClick={() => handlePageChange(safePage - 1)}
            disabled={safePage === 1}
          >
            ← Anterior
          </button>

          <div className="page-number-group">
            {pageItems.map((item) =>
              typeof item === "number" ? (
                <button
                  key={item}
                  type="button"
                  className={item === safePage ? "page-number active" : "page-number"}
                  aria-label={`Ir para a página ${item}`}
                  aria-current={item === safePage ? "page" : undefined}
                  onClick={() => handlePageChange(item)}
                >
                  {item}
                </button>
              ) : (
                <span key={item} className="page-ellipsis" aria-hidden="true">
                  …
                </span>
              ),
            )}
          </div>

          <button
            type="button"
            className="page-button page-button-next"
            aria-label="Próxima página"
            onClick={() => handlePageChange(safePage + 1)}
            disabled={safePage === totalPages}
          >
            Próxima →
          </button>
        </nav>

      </main>

      <ImageViewer
        images={filteredEntries.map((entry) => ({
          src: entry.image,
          alt: entry.imageAlt ?? entry.title,
        }))}
        selectedIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelect={setSelectedImageIndex}
        openerRef={imageOpenerRef}
        ariaLabel={selectedEntry?.title}
      />

      <Footer />
    </div>
  );
}
