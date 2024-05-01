import { useForm } from "react-hook-form";

export default function UpdateForm({ questionData, updateQ }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const id = questionData.Id;

  const onSubmit = (data) => {
    console.log(data);
    const updateQuestion = JSON.stringify(data);
    console.log(updateQuestion);
    console.log(id);
    updateQ();
  };

  console.log(questionData);

  return (
    <form
      className="update_form flex flex-col mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="Question" className="mb-1">
        Question
      </label>
      <input
        type="text"
        placeholder={questionData.Question}
        className="p-2"
        {...register("Question")}
      />
      <label htmlFor="AnswerA" className="my-1">
        Answer A
      </label>
      <input
        type="text"
        placeholder={questionData.AnswerA}
        {...register("AnswerA", {
          minLength: 1,
        })}
      />
      {errors.AnswerA && <p>Answer must have a minimum length of 1.</p>}
      <label htmlFor="AnswerB" className="my-1">
        Answer B
      </label>
      <input
        type="text"
        placeholder={questionData.AnswerB}
        {...register("AnswerB", {
          minLength: 1,
        })}
      />
      {/* {errors.AnswerB && <p className="text-red-500"></p>} */}
      <label htmlFor="TrueAnswerA" className="my-1">
        Correct Answer
      </label>
      <input
        type="radio"
        id="TrueAnswerA"
        className="-mb-4"
        value="A"
        {...register("TrueAnswer", {
          required: "Please select an answer",
        })}
      />
      <label htmlFor="TrueAnswerA">A</label>
      <input
        type="radio"
        id="TrueAnswerB"
        className="-mb-4"
        value="B"
        {...register("TrueAnswer", {
          required: "Please select an answer",
        })}
      />
      <label htmlFor="TrueAnswerB">B</label>
      {errors.TrueAnswer && (
        <p className="text-red-500">{errors.TrueAnswer.message}</p>
      )}
      <input
        type="submit"
        className="bg-zinc-400 text-zinc-50 px-4 py-2 mt-2 rounded-lg border border-zinc-700 hover:bg-zinc-600 transition duration-300 ease-in-out cursor-pointer w-60"
      />
    </form>
  );
}
