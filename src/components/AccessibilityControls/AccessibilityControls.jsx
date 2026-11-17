import { useEffect, useRef, useState } from "react";
import "./AccessibilityControls.css";

export default function AccessibilityControls() {
  const [textSize, setTextSize] = useState(0);
  const [highContrast, setHighContrast] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [speechStatus, setSpeechStatus] = useState("");
  const utteranceRef = useRef(null);
  const launcherRef = useRef(null);
  const panelRef = useRef(null);
  const speechSupported =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    "SpeechSynthesisUtterance" in window;

  useEffect(() => {
    const root = document.documentElement;
    const size = ["", "large", "larger"][textSize];

    if (size) {
      root.dataset.textSize = size;
    } else {
      delete root.dataset.textSize;
    }

    if (highContrast) {
      root.dataset.highContrast = "true";
    } else {
      delete root.dataset.highContrast;
    }
  }, [textSize, highContrast]);

  useEffect(() => {
    return () => {
      if (utteranceRef.current) {
        utteranceRef.current.onstart = null;
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
        window.speechSynthesis?.cancel();
      }
    };
  }, []);

  useEffect(() => {
    if (!panelOpen) return undefined;

    panelRef.current?.querySelector("button")?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPanelOpen(false);
        launcherRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [panelOpen]);

  function readPage() {
    const content = document.getElementById("main-content");
    const text = content?.innerText.trim();

    if (!text) {
      setSpeechStatus("Não foi possível encontrar o conteúdo para leitura.");
      return;
    }

    if (utteranceRef.current) {
      utteranceRef.current.onstart = null;
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "pt-BR";
    const portugueseVoice = window.speechSynthesis
      .getVoices()
      .find((voice) => voice.lang.toLowerCase().startsWith("pt-br"));
    if (portugueseVoice) utterance.voice = portugueseVoice;

    utterance.onstart = () => setSpeechStatus("Lendo o conteúdo da página.");
    utterance.onend = () => {
      utteranceRef.current = null;
      setSpeechStatus("Leitura concluída.");
    };
    utterance.onerror = () => {
      utteranceRef.current = null;
      setSpeechStatus("Não foi possível concluir a leitura em voz alta.");
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }

  function pauseReading() {
    window.speechSynthesis.pause();
    setSpeechStatus("Leitura pausada.");
  }

  function resumeReading() {
    window.speechSynthesis.resume();
    setSpeechStatus("Leitura retomada.");
  }

  function stopReading() {
    if (utteranceRef.current) {
      utteranceRef.current.onstart = null;
      utteranceRef.current.onend = null;
      utteranceRef.current.onerror = null;
    }
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setSpeechStatus("Leitura interrompida.");
  }

  return (
    <aside className="accessibility-widget">
      <button
        ref={launcherRef}
        className="accessibility-launcher"
        type="button"
        aria-label={panelOpen ? "Fechar opções de acessibilidade" : "Abrir opções de acessibilidade"}
        aria-expanded={panelOpen}
        aria-controls="accessibility-panel"
        onClick={() => setPanelOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="8" r="2" />
          <path d="M12 10v7m-4-4h8m-8 7 4-6 4 6" />
        </svg>
      </button>

      {panelOpen && (
        <div
          ref={panelRef}
          id="accessibility-panel"
          className="accessibility-panel"
          role="region"
          aria-label="Opções de acessibilidade"
        >
          <h2>Acessibilidade</h2>
          <div className="accessibility-options">
            <button
              type="button"
              aria-label="Diminuir tamanho do texto"
              onClick={() => setTextSize((size) => Math.max(size - 1, 0))}
              disabled={textSize === 0}
            >
              A−
            </button>
            <button
              type="button"
              aria-label="Aumentar tamanho do texto"
              onClick={() => setTextSize((size) => Math.min(size + 1, 2))}
              disabled={textSize === 2}
            >
              A+
            </button>
            <button
              type="button"
              aria-pressed={highContrast}
              onClick={() => setHighContrast((enabled) => !enabled)}
            >
              Alto contraste
            </button>
            <button
              type="button"
              aria-label="Restaurar opções de acessibilidade visual"
              onClick={() => {
                setTextSize(0);
                setHighContrast(false);
              }}
              disabled={textSize === 0 && !highContrast}
            >
              Restaurar
            </button>
          </div>

          <h3>Leitura em voz alta</h3>
          {speechSupported ? (
            <div className="accessibility-options speech-options">
              <button type="button" onClick={readPage}>
                Ouvir página
              </button>
              <button type="button" onClick={pauseReading}>
                Pausar
              </button>
              <button type="button" onClick={resumeReading}>
                Continuar
              </button>
              <button type="button" onClick={stopReading}>
                Parar
              </button>
            </div>
          ) : (
            <p className="speech-unavailable">
              A leitura em voz alta não é compatível com este navegador.
            </p>
          )}
          <p className="speech-status" aria-live="polite" role="status">
            {speechStatus}
          </p>
        </div>
      )}
    </aside>
  );
}
