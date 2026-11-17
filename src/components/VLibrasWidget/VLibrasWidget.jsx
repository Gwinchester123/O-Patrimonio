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

export default function VLibrasWidget() {
  useEffect(() => {
    loadVLibrasScript()
      .then(() => {
        if (!widgetInstance && window.VLibras) {
          widgetInstance = new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      })
      .catch((error) => {
        console.error("Falha ao inicializar o widget VLibras:", error);
      });
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
