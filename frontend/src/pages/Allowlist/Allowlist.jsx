import style from "./Allowlist.module.css";
import { useForm } from "react-hook-form";

export default function Allowlist() {
    // inicializa o formulário
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nome: 'meu nome',
            email: 'meuemail@email.com'
        }
    });

    // função chamada quando o form for enviado
    const onSubmit = (data) => {
        console.log(data); // aqui você recebe os valores do form
        reset()
    };

    return (
        <main className={style.allowllist__main}>
            <form className={style.allowlist__form} onSubmit={handleSubmit(onSubmit)}>
                <label>Nome</label>
                <input className={style.form__input} {...register("nome")} />

                <label>Email</label>
                <input className={style.form__input} {...register("email", {
                    required: "Email obrigatório",
                    pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Email inválido"
                    }
                })} />

                <button type="submit">Enviar</button>
            </form>
            {errors.email && <p>{errors.email.message}</p>}

        </main>
    );
}
