import { ReadBooks } from "../../Data/booktypes";
import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./ReviewBooksPage.scss";

type ReviewBooksPageProps = {
  selectedBookId: number | undefined;
  defaultFormState: ReadBooks;
};

const ReviewBooksPage = ({
  selectedBookId,
  defaultFormState,
}: ReviewBooksPageProps) => {
  const [bookToReview, setBookToReview] = useState<ReadBooks>(defaultFormState);
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const navigate = useNavigate();

  const handleGetBookById = async () => {
    const response = await fetch(
      `http://localhost:8080/currentlyReading/${selectedBookId}`
    );
    const bookData = await response.json();
    setBookToReview(bookData);
  };

  const handleRatingInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setRating(Number(cleanedInput));
  };

  const handleReviewInput = (event: FormEvent<HTMLInputElement>) => {
    const cleanedInput = event.currentTarget.value.toLowerCase();
    setReview(cleanedInput);
  };

  const defaultReviewFormState = {
    id: -1,
    title: bookToReview.title,
    author: bookToReview.author,
    genre: bookToReview.genre,
    imageURL: bookToReview.imageURL,
    numberOfPages: bookToReview.numberOfPages,
    dateAdded: bookToReview.dateAdded,
    dateStarted: bookToReview.dateStarted,
    dateFinished: new Date(),
    rating: rating,
    review: review,
  };

  const handleSubmit = () => {
    setBookToReview(defaultReviewFormState);
    handleSubmitRating(defaultReviewFormState);
  };

  const handleSubmitRating = async (book: ReadBooks) => {
    await fetch("http://localhost:8080/finishedreading", {
      method: "POST",
      headers: { admin: "true", "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    handleDeletingFromCurrentlyReading();
    navigate("/");
  };

  const handleDeletingFromCurrentlyReading = async () => {
    await fetch(`http://localhost:8080/currentreads/delete/${selectedBookId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (selectedBookId !== null && selectedBookId !== undefined) {
      handleGetBookById();
    }
    if (review !== undefined && selectedBookId !== undefined) {
    }
  }, [selectedBookId]);

  return (
    <div className="reviewpage">
      <h2 className="reviewpage__title">Review '{bookToReview.title}' by {bookToReview.author}</h2>
      <div className="reviewpage__table">
        <p className="reviewpage__table--heading">Enter your rating here:</p>
        <div className="reviewpage__table--rating">
          <input
            className="table__rating--input"
            type="text"
            placeholder="Rating"
            value={rating}
            onInput={handleRatingInput}
          />
          <p>/5</p>
        </div>
        <p className="reviewpage__table--heading">Enter your review here:</p>
        <input
          className="reviewpage__table--input"
          type="text"
          placeholder="Review"
          onInput={handleReviewInput}
        />
        <button className="reviewpage__table--button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReviewBooksPage;
