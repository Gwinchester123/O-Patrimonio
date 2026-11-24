import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Juridico.css";

export default function TermosPage() {
  return (
    <div className="legal-page">
      <Header />

      <main id="main-content" className="legal-shell" tabIndex={-1}>
        <article className="legal-document">
          <header className="legal-header">
            <span className="legal-eyebrow">INFORMAÇÕES LEGAIS</span>
            <h1>Termos de Uso</h1>
            <p className="legal-updated">Última atualização: 24 de novembro de 2026</p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. Aceitação dos termos</h2>
              <p>
                Ao acessar e utilizar o portal O Patrimônio, você concorda com estes
                Termos de Uso. Caso não concorde, interrompa o uso do portal.
              </p>
            </section>

            <section>
              <h2>2. Finalidade do portal</h2>
              <p>
                O Patrimônio é um projeto cultural e acadêmico voltado à divulgação,
                preservação e conhecimento das manifestações culturais, tradições,
                histórias e memórias de Limoeiro do Norte, no Ceará.
              </p>
            </section>

            <section>
              <h2>3. Uso permitido</h2>
              <p>
                O conteúdo pode ser consultado, compartilhado e utilizado para fins
                pessoais, educacionais e culturais, desde que sejam respeitados a
                autoria, a integridade das informações e a finalidade de preservação
                cultural do projeto.
              </p>
              <p>
                É proibido utilizar o portal de maneira ilegal, tentar comprometer sua
                segurança ou seu funcionamento, copiar o sistema para fins comerciais
                não autorizados ou publicar o conteúdo de forma a atribuir falsamente
                sua autoria a terceiros.
              </p>
            </section>

            <section>
              <h2>4. Conteúdo e direitos autorais</h2>
              <p>
                Textos, imagens, marcas, logotipos e demais elementos publicados neste
                portal permanecem sob os direitos de seus respectivos titulares.
                Créditos e informações sobre fontes devem ser respeitados.
              </p>
              <p>
                Caso identifique algum conteúdo protegido cuja publicação esteja em
                desacordo com seus direitos, entre em contato para solicitação de
                revisão por meio do endereço informado neste portal.
              </p>
            </section>

            <section>
              <h2>5. Informações culturais e históricas</h2>
              <p>
                Os registros apresentados têm caráter informativo e cultural. O projeto
                busca preservar a memória local com responsabilidade, mas pode atualizar,
                corrigir ou complementar informações conforme novas fontes ou
                contribuições sejam verificadas.
              </p>
            </section>

            <section>
              <h2>6. Responsabilidade</h2>
              <p>
                O acesso ao portal é gratuito e realizado por conta e risco do usuário.
                Buscamos manter o sistema disponível e as informações precisas, porém
                não garantimos funcionamento ininterrupto ou ausência completa de
                erros.
              </p>
            </section>

            <section>
              <h2>7. Links externos</h2>
              <p>
                O portal poderá conter links para páginas de terceiros. Não somos
                responsáveis pelo conteúdo, pelas práticas ou pelas políticas desses
                serviços externos.
              </p>
            </section>

            <section>
              <h2>8. Alterações destes termos</h2>
              <p>
                Estes termos poderão ser atualizados para refletir mudanças no portal,
                em requisitos legais ou em suas funcionalidades. A data da última
                atualização será exibida nesta página.
              </p>
            </section>

            <section>
              <h2>9. Contato</h2>
              <p>
                Para dúvidas sobre estes Termos de Uso, entre em contato com Giliard
                Moura pelo e-mail <a href="mailto:email@exemplo.com">email@exemplo.com</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
