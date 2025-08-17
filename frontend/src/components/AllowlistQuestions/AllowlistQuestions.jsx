import style from "./AllowlistQuestions.module.css";

const AllowlistQuestions = ({ currentStep, totalSteps, register }) => {

  return (
    <>
      {currentStep === 2 && (
        <div>
          <label>Telefone</label>
          <input className={style.form__input} {...register("telefone")} />
        </div>
      )}
      {currentStep === 3 && (
        <div>
          {/* Add your content for step 3 here */}
        </div>
      )}
    </>
  );
}
export default AllowlistQuestions;
