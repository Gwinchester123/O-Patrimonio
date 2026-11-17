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
        position: relative !important;
        top: 0 !important;
        right: 0 !important;
        width: 46px !important;
        height: 46px !important;
        z-index: auto !important;
      }

      #vlibras-button {
        position: absolute !important;
        top: 0 !important;
        right: 0 !important;
        width: 46px !important;
        height: 46px !important;
        border: 0 !important;
        border-radius: 12px !important;
        padding: 0 !important;
        background: #3185ee !important;
        transition: filter 0.2s ease !important;
      }

      #vlibras-button:hover,
      #vlibras-button:focus-visible {
        filter: brightness(1.1);
      }

      #vlibras-button img {
        display: block;
        width: 100%;
        height: 100%;
      }

      #vlibras-popup {
        position: absolute !important;
        top: 3px !important;
        right: 46px !important;
        display: block !important;
        width: 150px !important;
        height: 40px !important;
        opacity: 0;
        object-fit: contain;
        pointer-events: none;
        transform: scaleX(0);
        transform-origin: right center;
        transition: none !important;
        visibility: hidden;
      }

      @media (prefers-reduced-motion: reduce) {
        #vlibras-button {
          transition: none !important;
        }
      }
    `;
    shadowRoot.appendChild(styles);
  }

  const button = shadowRoot.getElementById("vlibras-button");
  const popup = shadowRoot.getElementById("vlibras-popup");
  if (button && popup && !button.dataset.popupEventsAttached) {
    let hidePopupTimeout;
    const setPopupVisible = (visible) => {
      window.clearTimeout(hidePopupTimeout);
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const duration = reducedMotion ? 0 : 280;

      popup.style.setProperty(
        "transition",
        reducedMotion
          ? "none"
          : "transform 280ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 180ms ease",
        "important",
      );
      popup.style.setProperty(
        "visibility",
        "visible",
        "important",
      );
      popup.style.setProperty("opacity", visible ? "1" : "0", "important");
      popup.style.setProperty(
        "transform",
        visible ? "scaleX(1)" : "scaleX(0)",
        "important",
      );

      if (!visible) {
        hidePopupTimeout = window.setTimeout(() => {
          popup.style.setProperty("visibility", "hidden", "important");
        }, duration);
      }
    };

    popup.getAnimations().forEach((animation) => animation.cancel());
    button.addEventListener("mouseenter", () => setPopupVisible(true));
    button.addEventListener("mouseleave", () =>
      setPopupVisible(button.matches(":focus-visible")),
    );
    button.addEventListener("focus", () => setPopupVisible(true));
    button.addEventListener("blur", () =>
      setPopupVisible(button.matches(":hover")),
    );
    button.dataset.popupEventsAttached = "true";
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
