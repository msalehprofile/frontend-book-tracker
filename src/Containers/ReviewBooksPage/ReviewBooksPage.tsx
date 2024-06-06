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
    handleSubmitRating(bookToReview);
  };

  const handleSubmitRating = async (book: ReadBooks) => {
    await fetch("http://localhost:8080/finishedreading", {
      method: "POST",
      headers: { admin: "true", "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    handleDeletingFromCurrentlyReading();
    navigate("/myBooks")
  };

  const handleDeletingFromCurrentlyReading = async () => {
   await fetch(`http://localhost:8080/currentreads/delete/${selectedBookId}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json",
      },
   })
  };

  useEffect(() => {
    if (selectedBookId !== null && selectedBookId !== undefined) {
      handleGetBookById();
    }
    if (review !== undefined && selectedBookId !== undefined) {

    }
  }, [selectedBookId]);

  return (
    <div>
      <h2>Review {bookToReview.title}</h2>
      <p>Enter your rating here:</p>
      <input
        type="text"
        placeholder="Rating"
        value={rating}
        onInput={handleRatingInput}
      />
      <p>/5</p>
      <p>Enter your review here:</p>
      <input type="text" placeholder="Review" onInput={handleReviewInput} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ReviewBooksPage;
