import { useEffect, useRef } from "react";
import "./ImageViewer.css";

export default function ImageViewer({
  images,
  selectedIndex,
  onClose,
  onSelect,
  openerRef,
  ariaLabel,
  closeLabel = "Fechar imagem",
  previousLabel = "Imagem anterior",
  nextLabel = "Próxima imagem",
}) {
  const closeButtonRef = useRef(null);
  const wasOpenRef = useRef(false);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];
  const isOpen = selectedImage !== null && selectedImage !== undefined;

  useEffect(() => {
    if (isOpen) {
      wasOpenRef.current = true;
      closeButtonRef.current?.focus();
    } else if (wasOpenRef.current) {
      wasOpenRef.current = false;
      openerRef.current?.focus();
    }
  }, [isOpen, openerRef]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        onSelect((index) => Math.max(index - 1, 0));
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        onSelect((index) => Math.min(index + 1, images.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, images.length, onClose, onSelect]);

  if (!isOpen) return null;

  return (
    <div
      className="image-viewer"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel || "Visualização da imagem"}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <button
        ref={closeButtonRef}
        className="image-viewer-close"
        type="button"
        aria-label={closeLabel}
        onClick={onClose}
      >
        ×
      </button>

      <button
        className="image-viewer-nav image-viewer-prev"
        type="button"
        aria-label={previousLabel}
        disabled={selectedIndex === 0}
        onClick={() => onSelect((index) => Math.max(index - 1, 0))}
      >
        ‹
      </button>

      <figure className="image-viewer-content">
        {selectedImage.src ? (
          <img
            className="image-viewer-image"
            src={selectedImage.src}
            alt={selectedImage.alt ?? ""}
          />
        ) : (
          <span className="image-viewer-placeholder" aria-hidden="true" />
        )}
      </figure>

      <button
        className="image-viewer-nav image-viewer-next"
        type="button"
        aria-label={nextLabel}
        disabled={selectedIndex === images.length - 1}
        onClick={() =>
          onSelect((index) => Math.min(index + 1, images.length - 1))
        }
      >
        ›
      </button>
    </div>
  );
}
