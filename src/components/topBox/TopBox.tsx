import "./topBox.scss";
import { useState, useEffect } from "react";

interface Book {
  ISBN: string;
  imgThumb: string;
  title: string;
  author: string;
  published: string;
}
console.log("test")
const TopBox = () => {
  const [books, setBooks] = useState<Book[]>([]);
  // Reading = 3, to read = 2, have read = 4
  useEffect(() => {
    const apiKey = "AIzaSyAxpEQF45eCDCToCIE9coTgEqiSuLiH5dE";

    fetch(
      `https://www.googleapis.com/books/v1/users/101275538209877269830/bookshelves/4/volumes?${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const dataItems = data.items;
        // console.log("API Pulled");
        // console.log(dataItems);
        const newDisplay = dataItems.map((items: any) => {
          const thisBook = {
            title: items.volumeInfo.title,
            subTitle: items.volumeInfo.subTitle || "",
            ISBN:
              items.volumeInfo.industryIdentifiers[1].identifier ||
              items.volumeInfo.industryIdentifiers[0].identifier,
            author:
              items.volumeInfo.authors === undefined
                ? "N/A"
                : items.volumeInfo.authors[0],
            published: items.volumeInfo.publishedDate,
            description: items.volumeInfo.description,
            publisher: items.volumeInfo.publisher,
            imgThumb:
              items.volumeInfo.imageLinks.thumbnail ||
              "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
          };
          return thisBook;
        });

        setBooks(newDisplay);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="topBox">
      <h1>Last Ten Books Read</h1>
      <div className="list">
        {books.map((book) => (
          <div className="listItem" key={book.ISBN}>
            <div className="user">
              <img src={book.imgThumb} alt="" />
              <div className="userTexts">
                <span className="username">{book.title}</span>
                <span className="email">{book.author}</span>
              </div>
            </div>
            <span className="amount">{book.published}</span>
          </div>
        ))}
      </div>
      {/* <h1>Last Five Projects</h1>
      <div className="list">
        {lastTenBooks.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default TopBox;
