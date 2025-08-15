import style from './Admin.module.css'

const Admin = () => {
    return (
        <main className={style.main__admin}>
            <main className={style.admin__main}>
                <section className={style.header__section}>
                    <div className={style.header__img}>
                        <img src="" alt="" />
                    </div>
                    <div className={style.admin__text}>
                        <h1 className={style.header__title}>Admin Dashboard</h1>
                        <p>Gerenciado de Allowlist</p>
                    </div>
                    <div className={style.hamburger_menu}>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </div>
                </section>

                <section className={style.admin__status__box}>
                    <div className={`${style.admin__pending__box} ${style.pending__text}`}>
                        <p className={style.admin__status__count}>0</p>
                        <h2 className={style.admin__status__title}>Pendentes</h2>
                    </div>
                    <div className={style.admin__approval__box}>
                        <p className={style.admin__status__count}>0</p>
                        <h2 className={style.admin__status__title}>Aprovados</h2>
                    </div>
                    <div className={style.admin__rejection__box}>
                        <p className={style.admin__status__count}>0</p>
                        <h2 className={style.admin__status__title}>Rejeitados</h2>
                    </div>
                </section>
            </main>
        </main>
    );
};

export default Admin;
