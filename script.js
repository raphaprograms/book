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
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook;

}
const container = document.querySelector('.container');

let clicktoAddBtn = document.createElement('button')
clicktoAddBtn.textContent = 'Click ME to Add a Book';
container.appendChild(clicktoAddBtn);

const form = document.createElement('form');
form.style.display = 'none';
form.style.flexDirection = 'column';
form.style.gap = '0.5em';

const titleInput = document.createElement('input');
titleInput.type = 'text';
titleInput.name = 'title';
titleInput.placeholder = 'Title';
titleInput.required = true;

const authorInput = document.createElement('input');
authorInput.type = 'text';
authorInput.name = 'author';
authorInput.placeholder = 'Author';
authorInput.required = true;

const pagesInput = document.createElement('input');
pagesInput.type = 'number';
pagesInput.name = 'pages';
pagesInput.placeholder = 'Pages';
pagesInput.required = true;

const selectRead = document.createElement('select');
selectRead.name = 'read';
selectRead.required = true;

const op1 = document.createElement('option');
op1.value = 'not read yet';
op1.textContent = 'Not Read Yet';

const op2 = document.createElement('option');
op2.value = 'read';
op2.textContent = 'Read';

selectRead.appendChild(op1);
selectRead.appendChild(op2);


const addBookBtn = document.createElement('button');
addBookBtn.type = 'submit';
addBookBtn.textContent = 'Add Book';

form.appendChild(titleInput);
form.appendChild(authorInput);
form.appendChild(pagesInput);
form.appendChild(selectRead);
form.appendChild(addBookBtn)
;container.appendChild(form);

clicktoAddBtn.addEventListener('click', () => {
    form.style.display = 'flex';
    clicktoAddBtn.style.display = 'none';
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = selectRead.value;

    const newBook = addBookToLibrary(title, author, pages, read);
    displayBook(newBook);

    form.reset();
    form.style.display = 'none';
    clicktoAddBtn.style.display = 'inline-block';
});


function displayBook(book) {

    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.id = book.id;

    const cardInfo = document.createElement('p');
    cardInfo.textContent = book.info();

    const toggleReadBtn = document.createElement('button');
    toggleReadBtn.textContent = 'Read / Not Read';
    toggleReadBtn.addEventListener('click', () => {
        book.read = (book.read === 'read') ? 'not read yet' : 'read';
        cardInfo.textContent = book.info();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        bookCard.remove();
        myLibrary = myLibrary.filter(b => b.id !== book.id);
    });

    bookCard.appendChild(cardInfo);
    bookCard.appendChild(toggleReadBtn);
    bookCard.appendChild(deleteBtn);
    container.appendChild(bookCard);
}