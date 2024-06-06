import "./ReviewForm.scss";
import { FormEventHandler } from "react";


type ReviewFormProps = {
  formTitle: string;
  rating: number | undefined;
  handleRatingInput: FormEventHandler<HTMLInputElement>
  handleReviewInput: FormEventHandler<HTMLInputElement>
  handleSubmit: FormEventHandler<HTMLFormElement>
};

const ReviewForm = ({
  formTitle, handleRatingInput, handleReviewInput, handleSubmit
}: ReviewFormProps) => {

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        <h2>{formTitle}</h2>
        <p>Enter your rating here:</p>
        <input
          type="text"
          placeholder="Rating"
          onInput={handleRatingInput}
        />
        <p>/5</p>
        <p>Enter your review here:</p>
        <input
          type="text"
          placeholder="Review"
          onInput={handleReviewInput}
        />
        <button >Submit</button>
        </form>
    </div>
  );
};

export default ReviewForm;
