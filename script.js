let myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${author}, ${pages} pages, ${read}.`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return myLibrary;

}
const container = document.querySelector('.container');

let clicktoAddBtn = document.createElement('button')
clicktoAddBtn.textContent = 'Click ME to Add a Book';
container.appendChild(clicktoAddBtn);

const form = document.createElement('form');
form.style.display = 'none';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.placeholder = 'Title';
titleInput.required = true;

const addBookBtn = document.createElement('button');
addBookBtn.type = 'submit';
addBookBtn.textContent = 'Add Book';
form.appendChild(addBookBtn);

form.appendChild(titleInput);
container.appendChild(form);

clicktoAddBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    form.style.flexWrap = 'wrap';
    form.styly.gap = '0.5em';
    clicktoAddBtn.style.display = 'none';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = 'author';
    const pages = 'pages';
    const read = 'read';

    const newBook = addBookToLibrary(title, author, pages, read);
    displayBook(newBook);

    form.reset();
    form.style.display = 'none';
    clicktoAddBtn.style.display = 'inline-block';
});


function displayBook(book) {
    let book = myLibrary[myLibrary.length - 1];

    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.id = book.id;

    const cardInfo = document.createElement('div');
    cardInfo.textContent = book.info();

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = 'Read / Not Read';
    toggleReadBtn.addEventListener('click', () => {
        toggleReadBtn.textContent = 'hmmmm'
        cardInfo.textContent = book.info();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        bookCard.remove();
        myLibrary = myLibrary.filter(b => b.id !== book.id);
    })
    bookCard.appendChild(cardInfo);
    bookCard.appendChild(toggleReadBtn);
    bookCard.appendChild(deleteBtn);

    container.appendChild(bookCard);
}





displayBook('Harry Potter', 'J.K. Rowland', '500', 'has been read');
console.log(myLibrary);




/* const book1 = new Book('Harry Potter', 'J.K. Rowland', '500', 'has been read'); 

console.log(book1.info());

console.log(Object.getPrototypeOf(book1) === Book.prototype); */