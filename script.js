const library = [];

//insert details of a book to a book card.
function insertBookDetail(bookBox, book, bookIndex) {
  bookBox.innerHTML = `
  <div class="image">
    <img src="${book.imageUrl}" alt="${book.title}" />
  </div>
  <div class="info">
    <div id="author">Author: <span>${book.author}</span></div>
    <div id="title">Title: <span>${book.title}</span></div>
    <div id="language">Language: <span>${book.language}</span></div>
    <div id="number-of-pages">Number of pages: <span>${
      book.numberOfPages
    }</span></div>
    <div id="status">
      Status:
      <button>${
        book.hasBeenRead === false ? "Has not read" : "Has read"
      }</button>
      <button class="trash-box js-trash-box" data-book-index="${bookIndex}"><img src="images/trash-solid.svg" class="trash-icon"></button>
    </div>
  </div>`;
}

function addBookHandler() {
  addBox.addEventListener("click", (event) => {
    event.preventDefault();
    modal.showModal();
  });
}

const addBox = document.querySelector(".js-add-book");
const modal = document.querySelector("#modal");
const container = document.querySelector(".js-flex-container");
const submitButton = document.querySelector(".submit-button");

addBookHandler();

// Display all books that we have on screen.
function displayBooks(library) {
  // loops through all books in the library and display them on screen before add button

  container.innerHTML = "";

  container.appendChild(addBox);

  library.forEach((book, bookIndex) => {
    const bookBox = document.createElement("div");
    bookBox.classList.add("card", "js-book");
    insertBookDetail(bookBox, book, bookIndex);
    container.append(bookBox);
  });

  setDeleteBookButton();
}

displayBooks(library);

function Book(author, title, language, numberOfPages, status, imageUrl) {
  this.author = author;
  this.title = title;
  this.language = language;
  this.numberOfPages = numberOfPages;
  this.status = status;
  this.imageUrl = imageUrl;
}

function addBookToLibrary(
  author,
  title,
  language,
  numberOfPages,
  status,
  imageUrl
) {
  const book = new Book(
    author,
    title,
    language,
    numberOfPages,
    status,
    imageUrl
  );
  library.push(book);
}

function submitButtonHandler() {
  submitButton.addEventListener("click", () => {
    const author = document.querySelector("#author-input").value;
    const title = document.querySelector("#title-input").value;
    const language = document.querySelector("#language-input").value;
    const numberOfPages = document.querySelector(
      "#number-of-pages-input"
    ).value;
    const status = document.querySelector(
      'input[name="status-input"]:checked'
    ).value;
    const imageUrl = document.querySelector("#image-url-input").value;

    addBookToLibrary(author, title, language, numberOfPages, status, imageUrl);

    displayBooks(library);
  });
  modal.close(); // close modal
}

submitButtonHandler();

function setDeleteBookButton() {
  const deleteButtons = document.querySelectorAll(".js-trash-box");

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      const bookIndex = deleteButton.dataset.bookIndex;
      console.log(deleteButton);
      console.log(deleteButton.dataset.bookIndex);
      removeItemInArray(library, bookIndex);
      displayBooks(library);
    });
  });
}

function removeItemInArray(array, index) {
  parseIntIndex = parseInt(index);

  if (parseIntIndex !== -1) {
    array.splice(parseIntIndex, 1);
  }
}
