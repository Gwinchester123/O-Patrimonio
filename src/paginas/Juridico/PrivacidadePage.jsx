import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Juridico.css";

export default function PrivacidadePage() {
  return (
    <div className="legal-page">
      <Header />

      <main id="main-content" className="legal-shell" tabIndex={-1}>
        <article className="legal-document">
          <header className="legal-header">
            <span className="legal-eyebrow">INFORMAÇÕES LEGAIS</span>
            <h1>Política de Privacidade</h1>
            <p className="legal-updated">Última atualização: 24 de novembro de 2026</p>
          </header>

          <div className="legal-content">
            <section>
              <h2>1. Sobre esta política</h2>
              <p>
                Esta Política explica como o portal O Patrimônio trata informações
                relacionadas à navegação e ao uso do serviço. O responsável pelo
                portal é Giliard Moura.
              </p>
            </section>

            <section>
              <h2>2. Dados coletados</h2>
              <p>
                Atualmente, o portal não solicita cadastro e não possui formulário
                próprio para coleta de dados pessoais. As páginas podem ser acessadas
                normalmente sem informar nome, endereço de e-mail ou outros dados
                pessoais.
              </p>
              <p>
                Informações enviadas voluntariamente por e-mail são utilizadas apenas
                para responder à solicitação e realizar a conversa relacionada a ela.
              </p>
            </section>

            <section>
              <h2>3. Cookies e tecnologias semelhantes</h2>
              <p>
                O portal não utiliza cookies próprios ou ferramentas de rastreamento
                para fins de publicidade ou análise de comportamento nesta versão.
              </p>
            </section>

            <section>
              <h2>4. Dados técnicos de acesso</h2>
              <p>
                A infraestrutura utilizada para hospedar o portal poderá processar
                automaticamente registros técnicos mínimos, como endereço IP, tipo de
                navegador, páginas solicitadas e horários de acesso, com a finalidade
                de disponibilizar, proteger e manter a operação do serviço.
              </p>
            </section>

            <section>
              <h2>5. Uso das informações</h2>
              <p>
                Eventuais dados técnicos ou contatos voluntários são usados para
                operar o portal, responder solicitações, corrigir problemas e proteger
                o serviço contra uso indevido.
              </p>
            </section>

            <section>
              <h2>6. Compartilhamento</h2>
              <p>
                Não comercializamos dados pessoais. Informações poderão ser
                compartilhadas apenas com fornecedores técnicos necessários à hospedagem
                do portal ou quando houver obrigação legal.
              </p>
            </section>

            <section>
              <h2>7. Segurança e retenção</h2>
              <p>
                Adotamos medidas técnicas razoáveis para reduzir riscos de acesso
                indevido. Quando houver contato por e-mail, os dados serão mantidos
                pelo tempo necessário à resposta e à eventual obrigação aplicável.
              </p>
            </section>

            <section>
              <h2>8. Seus direitos</h2>
              <p>
                Você pode solicitar confirmação sobre informações pessoais enviadas
                voluntariamente, pedir correção ou solicitar a exclusão do contato,
                quando aplicável. Algumas informações poderão ser mantidas quando
                necessário para cumprir obrigação legal ou resolver uma solicitação.
              </p>
            </section>

            <section>
              <h2>9. Atualizações desta política</h2>
              <p>
                Esta política poderá ser atualizada quando houver alterações nas
                funcionalidades, nos serviços ou em exigências legais. A data da última
                revisão estará sempre disponível nesta página.
              </p>
            </section>

            <section>
              <h2>10. Contato</h2>
              <p>
                Para exercer direitos relacionados à privacidade ou tirar dúvidas sobre
                esta política, entre em contato com Giliard Moura pelo e-mail{" "}
                <a href="mailto:email@exemplo.com">email@exemplo.com</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
