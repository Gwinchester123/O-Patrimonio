import { useEffect } from "react";

let widgetScriptPromise;
let widgetInstance;

function loadVLibrasScript() {
  if (window.VLibras) {
    return Promise.resolve();
  }

  if (!widgetScriptPromise) {
    widgetScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error("Não foi possível carregar o VLibras."));
      document.body.appendChild(script);
    });
  }

  return widgetScriptPromise;
}

function placeVLibrasButton() {
  const widget = document.getElementById("vlibras-access-wrapper");
  const container = document.querySelector(".accessibility-tools");
  const accessibilityWidget = container?.querySelector(".accessibility-widget");
  const shadowRoot = widget?.shadowRoot;

  if (!widget || !container || !accessibilityWidget || !shadowRoot) {
    return false;
  }

  container.insertBefore(widget, accessibilityWidget);

  if (!shadowRoot.getElementById("vlibras-layout-styles")) {
    const styles = document.createElement("style");
    styles.id = "vlibras-layout-styles";
    styles.textContent = `
      #vlibras-access {
        position: static !important;
        top: auto !important;
        right: auto !important;
        width: 46px !important;
        height: 46px !important;
        flex: 0 0 46px !important;
        z-index: auto !important;
        transition: none !important;
      }

      #vlibras-access:hover,
      #vlibras-access:has(#vlibras-button:focus-visible) {
        width: 46px !important;
      }

      #vlibras-button {
        position: relative !important;
        width: 46px !important;
        height: 46px !important;
        border: 0 !important;
        border-radius: 12px !important;
        padding: 0 !important;
        background: #3185ee !important;
      }

      #vlibras-button img {
        display: block;
        width: 100%;
        height: 100%;
      }

      #vlibras-popup {
        display: none !important;
      }
    `;
    shadowRoot.appendChild(styles);
  }

  return true;
}

export default function VLibrasWidget() {
  useEffect(() => {
    let observer;

    loadVLibrasScript()
      .then(() => {
        if (!widgetInstance && window.VLibras) {
          widgetInstance = new window.VLibras.Widget("https://vlibras.gov.br/app");
        }

        if (!placeVLibrasButton()) {
          observer = new MutationObserver(() => {
            if (placeVLibrasButton()) {
              observer.disconnect();
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }
      })
      .catch((error) => {
        console.error("Falha ao inicializar o widget VLibras:", error);
      });

    return () => observer?.disconnect();
  }, []);

  return (
    <div vw="" className="enabled">
      <div vw-access-button="" className="active"></div>
      <div vw-plugin-wrapper="">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}
