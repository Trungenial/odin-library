const library = [
  {
    image_url: "images/de-men-phieu-luu-ky.png",
    author: "Tô Hoài",
    title: "Dế mèn phiêu lưu ký",
    language: "Vietnamese",
    numberOfPages: 100,
    hasBeenRead: false,
  },
  {
    image_url: "images/de-men-phieu-luu-ky.png",
    author: "Tô Hoài",
    title: "Dế mèn phiêu lưu ký",
    language: "Vietnamese",
    numberOfPages: 100,
    hasBeenRead: false,
  },
  {
    image_url: "images/de-men-phieu-luu-ky.png",
    author: "Tô Hoài",
    title: "Dế mèn phiêu lưu ký",
    language: "Vietnamese",
    numberOfPages: 100,
    hasBeenRead: false,
  },
  {
    image_url: "images/de-men-phieu-luu-ky.png",
    author: "Tô Hoài",
    title: "Dế mèn phiêu lưu ký",
    language: "Vietnamese",
    numberOfPages: 100,
    hasBeenRead: false,
  },
];

//insert details of a book to a book card.
function insertBookDetail(bookBox, book) {
  bookBox.innerHTML = `
  <div class="image">
    <img src="${book.image_url}" alt="${book.image_url.slice(
    7,
    book.image_url.length - 4
  )}" />
  </div>
  <div class="info">
    <div>Author: <span>${book.author}</span></div>
    <div>Title: <span>${book.title}</span></div>
    <div>Language: <span>${book.language}</span></div>
    <div>Number of pages: <span>${book.numberOfPages}</span></div>
    <div>
      Status:
      <button>${
        book.hasBeenRead === false ? "Has not read" : "Has read"
      }</button>
    </div>
  </div>`;
}

// Display all books that we have on screen.
function displayBooks(library) {
  const container = document.querySelector(".flex-container");

  // loops through all books in the library and display them on screen
  library.forEach((book) => {
    const bookBox = document.createElement("div");
    bookBox.classList.add("book");
    insertBookDetail(bookBox, book);
    container.appendChild(bookBox);
  });
}

displayBooks(library);
