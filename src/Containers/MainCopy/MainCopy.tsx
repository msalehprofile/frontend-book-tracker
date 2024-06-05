import ViewAllBooks from "../ViewAllBooks/ViewAllBooks";
import "./MainCopy.scss";
import { Books } from "../../Data/booktypes";

import React, { useState } from "react";

type MainCopyProps = {
  showAllBooks: boolean;
  allBooks: Books[];
};

const MainCopy = ({ showAllBooks, allBooks }: MainCopyProps) => {
  return (
    <>
      <div className="mainCopy">
        {showAllBooks && <ViewAllBooks allBooks={allBooks} />}
      </div>
    </>
  );
};

export default MainCopy;
