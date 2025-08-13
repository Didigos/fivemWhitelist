import { Link } from "react-router-dom";
import style from "./Terms.module.css"; // Supondo que você tenha um CSS module

const Terms = () => {
  return (
    <>
      <section className={style.scroll_container}>
        <h1 className={style.title}>Termos de Utilização</h1>

        <p>
          Bem-vindo ao nosso website de whitelist e servidor FiveM. Ao acessar e
          utilizar este serviço, você concorda em cumprir estes Termos de
          Utilização.
        </p>

        <h2>1. Aceitação dos Termos</h2>
        <p>
          Ao se registrar em nossa whitelist ou acessar nosso servidor, você
          concorda com as regras estabelecidas neste documento e nas regras
          específicas do servidor.
        </p>

        <h2>2. Uso do Serviço</h2>
        <p>
          Você se compromete a utilizar nosso website e servidor de forma ética,
          respeitando os demais jogadores e a comunidade. Qualquer comportamento
          abusivo, ofensivo ou ilegal poderá resultar em banimento e exclusão da
          whitelist.
        </p>

        <h2>3. Responsabilidades do Usuário</h2>
        <p>
          É sua responsabilidade manter suas informações de acesso seguras e não
          compartilhá-las com terceiros. Qualquer atividade realizada com sua
          conta será de sua responsabilidade.
        </p>

        <h2>4. Conteúdo do Usuário</h2>
        <p>
          Você é responsável pelo conteúdo que enviar ou publicar através do
          nosso serviço e concorda que não irá postar conteúdo ilegal, ofensivo,
          discriminatório ou que infrinja direitos de terceiros.
        </p>

        <h2>5. Modificações e Atualizações</h2>
        <p>
          Reservamo-nos o direito de modificar estes termos a qualquer momento.
          As alterações serão publicadas neste espaço e o uso continuado do
          serviço constitui aceitação dos novos termos.
        </p>

        <h2>6. Privacidade</h2>
        <p>
          Seu uso do serviço está sujeito à nossa Política de Privacidade, que
          descreve como coletamos, usamos e protegemos suas informações.
        </p>

        <h2>7. Limitação de Responsabilidade</h2>
        <p>
          Não nos responsabilizamos por quaisquer danos diretos ou indiretos
          decorrentes do uso ou impossibilidade de uso do serviço, incluindo
          perdas de dados ou interrupções.
        </p>

        <h2>8. Rescisão</h2>
        <p>
          Podemos encerrar seu acesso ao serviço a qualquer momento, sem aviso
          prévio, caso você viole estes termos ou as regras do servidor.
        </p>

        <h2>9. Lei Aplicável</h2>
        <p>
          Estes termos são regidos pelas leis do país em que a empresa ou
          responsável pelo servidor está sediada.
        </p>

        <p>
          Se você concorda com estes termos, continue utilizando nosso website e
          servidor.
        </p>
        <div className={style.terms__btn_container}>
          <a
            className={style.menu__button}
            href="https://discord.com/oauth2/authorize?client_id=1402453996458999991&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscord&scope=identify+email"
          >
            Concordo
          </a>
          <a
            className={style.menu__button}
            href="http://localhost:5173/"
          >
            Não Concordo
          </a>
        </div>
      </section>
    </>
  );
};

export default Terms;
