import { useEffect, useState } from 'react';
import style from './AllowlistCard.module.css';

const AllowlistCard = ({status = 'Aguardando', obs='Sem observação no momento...'}) => {
    const [currentStatus, setStatus] = useState(status);
    const [currentObs, setObs] = useState(obs);

    useEffect(()=>{
        if(status === 'Aprovado'){
            setStatus('Aprovado')
        }else if(status === 'Rejeitado'){
            setStatus('Rejeitado')
        }else if(status === 'Aguardando'){
            setStatus('Aguardando')
        }

        if(obs){
            setObs(obs)
        }
    }, [status,obs])

    return (
        <section className={style.allowlist__section}>
            <div className={style.allowlist__left__infos}>
                <h1>Solicitação de Allowlist</h1>
                <span className={style.allowlist__date}>Data:</span>
                <div className={style.allowlist__observation}>
                    <p className={style.allowlist__observation__title}>Observação</p>
                    <p className={style.allowlist__observation__text}>
                        {currentObs}
                    </p>
                </div>
            </div>
            <div className={style.allowlist__right__infos}>
                <div className={style.allowlist__header__status}>
                    <span className={`${style.allowlist__status__text} ${style[`status__${currentStatus.toLowerCase()}`]}`}>
                        {currentStatus}
                    </span>
                </div>
                <span className={style.allowlist__date__info}>
                    15/12/1986
                </span>
            </div>
        </section>

    )
}

export default AllowlistCard