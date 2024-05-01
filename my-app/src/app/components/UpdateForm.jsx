import { useForm } from "react-hook-form";

export default function UpdateForm({ questionData, updateQ }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //   function handleSubmit(data) {
  //     console.log(data);
  //     updateQ();
  //   }

  return (
    <form className="update_form flex flex-col mt-5" onSubmit={handleSubmit}>
      <label htmlFor="Question">Question</label>
      <input type="text" className="p-2" {...register("Question")} />
      <label htmlFor="Answer A">Answer A</label>
      <input
        {...register("AnswerA", {
          minLength: 1,
          placeholder: questionData.AnswerA,
        })}
      />
      {errors.AnswerA && <p>Answer must have a minimum length of 1.</p>}
      <label htmlFor="Answer B">Answer B</label>
      <input
        type="text"
        {...register("AnswerB", {
          minLength: 1,
        })}
      />
      {errors.AnswerB && <p>Answer must have a minimum length of 1.</p>}
    <label htmlFor="TrueAnswer">Correct Answer</label>
      <input
        type="radio"
        value="A"
        {...register("TrueAnswer", {
          required: true,
        })}
      />
      <label htmlFor="A">A</label>
      <input
        type="radio"
        value="B"
        {...register("TrueAnswer", {
          required: true,
        })}
      />
      <label htmlFor="B">B</label>
      {errors.TrueAnswer && <p>This field is required.</p>}
      <input type="submit" className="bg-zinc-400 text-zinc-50 px-4 py-2 mt-2 rounded-lg border border-zinc-700 hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer" />
    </form>
  );
}
