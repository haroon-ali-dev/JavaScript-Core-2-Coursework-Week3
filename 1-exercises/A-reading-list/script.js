function readingList(books) {
  const content = document.querySelector("#content");

  const li = books.map((book) => {
    return `<li class="${book.alreadyRead ? "read" : ""}" >
              <p>${book.title} by ${book.author}</p>
              <img src="${book.bookCoverImage}" />
            </li>`;
  });

  const ul = `<ul>${li.join("")}</ul>`;

  content.insertAdjacentHTML("beforeend", ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
