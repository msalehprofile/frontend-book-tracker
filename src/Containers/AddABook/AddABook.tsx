import "./AddABook.scss";
import { Books } from "../../Data/booktypes";
import { AddABookForm } from "../../Components/AddABookForm/AddABookForm";

const AddABook = () => {

  const handleSubmit = async (book: Books) => {
    await fetch("http://localhost:8080/addbook", {
      method: "POST",
      headers: { admin: "true", "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });


  };

  const defaultFormState = {
    id: -1,
    title: "",
    author: "",
    genre: "",
    numberOfPages: 0,
  };

  return (
    <div className="addingBookForm">
      <AddABookForm
        formTitle="Add a new book"
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
      />
    </div>
  );
};

export default AddABook;
