import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./books.scss";
import Add from "../../components/add/Add";
import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
interface Book {
  ISBN: string;
  img: string;
  title: string;
  author: string;
  published: string;
}
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 150,
  },
  {
    field: "author",
    type: "string",
    headerName: "Author",
    width: 150,
  },
  {
    field: "description",
    type: "string",
    headerName: "Description",
    width: 600,
  },

  {
    field: "started",
    headerName: "Started",
    width: 150,
    type: "string",
  },
  {
    field: "finished",
    headerName: "Finished",
    width: 150,
    type: "boolean",
  },
];

const Books = () => {
  const [open, setOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const apiKey = "AIzaSyAxpEQF45eCDCToCIE9coTgEqiSuLiH5dE";
    for (let i = 2; i < 5; i++) {
      fetch(
        `https://www.googleapis.com/books/v1/users/101275538209877269830/bookshelves/${i}/volumes?${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          const dataItems = data.items;
          console.log("API Pulled");
          // console.log(dataItems);
          dataItems.map((items: any) => {
            const thisBook = {
              id: items.volumeInfo.industryIdentifiers[1].identifier ||
              items.volumeInfo.industryIdentifiers[0].identifier,
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
              img:
                items.volumeInfo.imageLinks.thumbnail ||
                "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",
            };
            setBooks(prev=> [...prev, thisBook]);
          });
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(books);
  // TEST THE API

  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),FuserR
  // });

  return (
    <div className="books">
      <div className="info">
        <h1>Books</h1>
        <button onClick={() => setOpen(true)}>Add New Book</button>
      </div>
      <DataTable slug="books" columns={columns} rows={books} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="books" columns={columns} rows={bookRows} />
      )} */}
      {open && <Add slug="book" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Books;
