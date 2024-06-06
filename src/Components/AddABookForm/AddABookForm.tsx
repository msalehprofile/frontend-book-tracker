import "./AddABookForm.scss";
import { Books } from "../../Data/booktypes";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

type AddABookFormProps = {
    defaultFormState: Books;
    formTitle: string;
    handleSubmit: (book: Books) => void;
};

export const AddABookForm = ({
    defaultFormState,
    handleSubmit,
    formTitle,
    }: AddABookFormProps) => {
    const [book, setBook] = useState<Books>(defaultFormState);
    const navigate = useNavigate();

    const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(book).some((value) => !value)) {
        alert("Missing content, unable to proceed");
        return;
    } else {
        alert("Thank you for adding a book")
        handleSubmit(book);
        navigate("/");
    }
};

    const handleInput = (event: FormEvent<HTMLInputElement>, key: string) =>
        setBook({ ...book, [key]: event.currentTarget.value });

    return (
    <div className="addingBookForm">
        <h2 className="addingBookForm__title">{formTitle}</h2>
        <form onSubmit={handleValidation} className="addingBookForm__table">
            <p className="addingBookForm__table--heading">Title:</p>
        <input
            className="addingBookForm__table--inputs"
            type="text"
            placeholder="Title"
            value={book.title}
            onInput={(event) => handleInput(event, "title")}
        />
        <p className="addingBookForm__table--heading"> Author:</p>
        <input
            className="addingBookForm__table--inputs"
            type="text"
            placeholder="Author"
            value={book.author}
            onInput={(event) => handleInput(event, "author")}
        />
        <p className="addingBookForm__table--heading">Genre:</p>
        <input
            className="addingBookForm__table--inputs"
            type="text"
            placeholder="Genre"
            value={book.genre}
            onInput={(event) => handleInput(event, "genre")}
        />
        <p className="addingBookForm__table--heading">Number of Pages:</p>
        <input
            className="addingBookForm__table--inputs"
            type="text"
            placeholder="Number of Pages"
            value={book.numberOfPages}
            onInput={(event) => handleInput(event, "numberOfPages")}
        />
        <button type="submit" className="addingBookForm--button">
          Submit
        </button>
      </form>
    </div>
  );
};
