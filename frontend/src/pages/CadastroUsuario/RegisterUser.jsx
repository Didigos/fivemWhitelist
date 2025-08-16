import React from "react";
import { useForm } from "react-hook-form";

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      senha: "",
      bio: "",
      genero: "",
      termos: false,
      cidade: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Cadastro Completo</h2>

      {/* Nome */}
      <div>
        <label>Nome:</label>
        <input
          {...register("nome", { required: "O nome é obrigatório" })}
        />
        {errors.nome && <p>{errors.nome.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* Senha */}
      <div>
        <label>Senha:</label>
        <input
          type="password"
          {...register("senha", {
            required: "A senha é obrigatória",
            minLength: {
              value: 6,
              message: "A senha deve ter pelo menos 6 caracteres",
            },
          })}
        />
        {errors.senha && <p>{errors.senha.message}</p>}
      </div>

      {/* Bio (textarea) */}
      <div>
        <label>Bio:</label>
        <textarea
          {...register("bio", {
            required: "A bio é obrigatória",
            minLength: { value: 10, message: "Mínimo de 10 caracteres" },
          })}
        />
        {errors.bio && <p>{errors.bio.message}</p>}
      </div>

      {/* Gênero (radio) */}
      <div>
        <label>Gênero:</label>
        <div>
          <input
            type="radio"
            value="masculino"
            {...register("genero", { required: "Selecione um gênero" })}
          />{" "}
          Masculino
        </div>
        <div>
          <input
            type="radio"
            value="feminino"
            {...register("genero", { required: "Selecione um gênero" })}
          />{" "}
          Feminino
        </div>
        <div>
          <input
            type="radio"
            value="outro"
            {...register("genero", { required: "Selecione um gênero" })}
          />{" "}
          Outro
        </div>
        {errors.genero && <p>{errors.genero.message}</p>}
      </div>

      {/* Termos (checkbox) */}
      <div>
        <label>
          <input
            type="checkbox"
            {...register("termos", { required: "Você deve aceitar os termos" })}
          />{" "}
          Aceito os termos de uso
        </label>
        {errors.termos && <p>{errors.termos.message}</p>}
      </div>

      {/* Cidade (select) */}
      <div>
        <label>Cidade:</label>
        <select
          {...register("cidade", { required: "Selecione uma cidade" })}
          defaultValue=""
        >
          <option value="" disabled>
            Selecione...
          </option>
          <option value="sp">São Paulo</option>
          <option value="rj">Rio de Janeiro</option>
          <option value="bh">Belo Horizonte</option>
        </select>
        {errors.cidade && <p>{errors.cidade.message}</p>}
      </div>

      {/* Botão */}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default RegisterUser
