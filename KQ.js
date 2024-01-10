const books = [
  {
    title: "Book One",
    author: "Author A",
    year: 2001,
    genres: ["Fantasy", "Adventure"],
  },
  {
    title: "Book Two",
    author: "Author B",
    year: 1985,
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Book Three",
    author: "Author C",
    year: 2020,
    genres: ["Science Fiction", "Thriller"],
  },
  {
    title: "Book Four",
    author: "Author A",
    year: 1999,
    genres: ["Fantasy", "Horror"],
  },
  {
    title: "Book Five",
    author: "Author B",
    year: 2010,
    genres: ["Science Fiction"],
  },
];

const filteredBooks = books.filter(
  (book) => book.year > 2000 && book.genres.includes("Science Fiction")
);

const oldestBook = books.reduce((oldest, book) =>
  oldest.year < book.year ? oldest : book
);

// const authors = [...new Set(books.map((book) => book.author))];
const authors = books
  .map((book) => book.author)
  .filter((author, index, array) => array.indexOf(author) === index);

console.log(authors);

const allAfter1900 = books.every((book) => book.year > 1900);

const sortedBooks = [...books].sort((a, b) => a.year - b.year);

const genreCounts = books.reduce((acc, book) => {
  book.genres.forEach((genre) => {
    if (acc[genre]) {
      acc[genre]++;
    } else {
      acc[genre] = 1;
    }
  });
  return acc;
}, {});
