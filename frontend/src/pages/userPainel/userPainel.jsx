import style from './userPainel.module.css';
import AllowlistCard from '../../components/AllowlistCard/AllowlistCard';
const UserPainel = () => {
  return (
    <main className={style.main__user__painel}>
      <section className={style.info__container}>
        <div className={style.info__avatar}>
        </div>
        <div className={style.info__userinfos}>
          <h2>Didigos</h2>
          <span>cargo do discord</span>
        </div>
      </section>
      <section className={style.allowlist__header}>
        <h1>Status da Allowlist</h1>
        <div className={style.allowlist__header__status}>
          <span className={style.header__status}>Pendente</span>
        </div>
      </section>
      <AllowlistCard
        status="Aguardando"
        obs="Aguardando a aprovação."
      />
      <AllowlistCard
        status="Aprovado"
        obs="Solicitação aprovada com sucesso."
      />
      <AllowlistCard
        status="Rejeitado"
        obs="Idade abaixo de 18 anos."
      />
      <div className={style.allowlist__buttons}>
        <button className={style.allowlist__btn__add}>Fazer Allowlist</button>
        <a className={style.allowlist__btn__back} href="/">Voltar para página inicial</a>
      </div>
      
    </main>
  );
};

export default UserPainel;
