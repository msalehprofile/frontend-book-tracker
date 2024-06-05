import ViewAllBooks from "../ViewAllBooks/ViewAllBooks";
import "./MainCopy.scss";

import React, { useState } from "react";

type MainCopyProps = {
  showAllBooks: boolean;
};

const MainCopy = ({ showAllBooks }: MainCopyProps) => {
  return (
    <>
      <div className="mainCopy">
        {showAllBooks && <ViewAllBooks showAllBooks={showAllBooks} />}
      </div>
    </>
  );
};

export default MainCopy;
