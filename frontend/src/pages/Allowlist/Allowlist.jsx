import { useState } from "react";
import style from "./Allowlist.module.css";
import { useForm } from "react-hook-form";
import AllowlistQuestions from "../../components/AllowlistQuestions/AllowlistQuestions";

export default function Allowlist() {
  // inicializa o formulário
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, //não esquece de tratar as mensagens de erro
  } = useForm({
    defaultValues: {
      nome: " ",
      email: " ",
    },
  });

  const [currentStep, setCurrentStep] = useState(1);

  const totalSteps = 2;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // função chamada quando o form for enviado
  const onSubmit = (data) => {
    console.log(data); // aqui você recebe os valores do form
    reset();
  };

  return (
    <main className={style.allowllist__main}>
      <div className={style.head__title}>
        <h1 className={style.head__title__h1}>Formulário para Allowlist</h1>
        <p className={style.head__title__p}>
          Preencha todos os campos para garantis maior chance de aprovação.
        </p>
        {/* exibir etapas */}
        {currentStep === 1 && (
          <div>
            <h2>Etapa 1</h2>
            <p>Informações pessoais</p>
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Passo 2</h2>
            <p>Informações adicionais</p>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={style.allowllist__form}
      >
        <h1>Dados do personagem</h1>
        {currentStep === 1 && (
          <div className={style.form__questions_section}>
            <label>Nome Completo</label>
            <input className={style.form__input} {...register("nome")} />

            <label>Email</label>
            <input
              className={style.form__input}
              {...register("email", {
                required: "Email obrigatório",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Email inválido",
                },
              })}
            />

            <label>Características</label>
            <textarea
              className={style.form__textarea}
              {...register("caracteristicas")}
            ></textarea>
            <p className={style.form__textarea__description}>
              Por exemplo: pontos fortes, franquezas, medos, fobias, etx...
            </p>

            <label>Biografia</label>
            <textarea
              className={style.form__textarea}
              {...register("biografia")}
            ></textarea>
            <p className={style.form__textarea__description}>
              Caso seja detectado que o texto foi feito com ajuda de
              Inteligência <br /> Artificial, sua Allowlist será automaticamente
              desconsiderada!
            </p>
            <label>
              Selecione os Horários em que seu <br /> personagem estará no
              servidor
            </label>

            <div className={style.form__horarios}>
              <input
                type="checkbox"
                {...register("horarios.manha")}
                id="manha"
              />
              <label htmlFor="manha">Manhã</label>
              <input
                type="checkbox"
                {...register("horarios.tarde")}
                id="tarde"
              />
              <label htmlFor="tarde">Tarde</label>
              <input
                type="checkbox"
                {...register("horarios.noite")}
                id="noite"
              />
              <label htmlFor="noite">Noite</label>
            </div>
            <div className={style.form__buttons}>
              <button type="button" onClick={prevStep}>
                Voltar
              </button>
              <button type="button" onClick={nextStep}>
                Próximo
              </button>
            </div>
          </div>
        )}
        {currentStep === 2 && <AllowlistQuestions register={register} />}
        {currentStep > 1 && (
          <div>
            <button type="button" onClick={prevStep}>
              Voltar
            </button>
          </div>
        )}
        {currentStep === totalSteps && (
          <div>
            <button type="submit">Enviar</button>
          </div>
        )}
      </form>
    </main>
  );
}
