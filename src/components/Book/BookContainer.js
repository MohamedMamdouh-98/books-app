import React, { Fragment, useEffect } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, deleteBooks } from "../../store/bookSlice";
import "./book.css";

const PostContainer = () => {
  const { isLoading, books } = useSelector((state) => state.books);

  const { isLogIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks({ id: 1 }));
  }, [dispatch]);
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            isLogIn={isLogIn}
            deleteBooks={deleteBooks}
            dispatch={dispatch}
          />
        </div>
        <div className="col side-line">
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
