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
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return myLibrary;

}

let container = document.querySelector('.container');
let clicktoAddBtn = document.createElement('button')
clicktoAddBtn.textContent = 'Click ME to Add a Book';
container.appendChild(clicktoAddBtn);


function displayBook(title, author, pages, read) {
    addBookToLibrary(title, author, pages, read);
    let book = myLibrary[myLibrary.length - 1];

    let bookCard = document.createElement('div');
    bookCard.textContent = book.info(),
    bookCard.classList.add('book-card');
    container.appendChild(bookCard);
}





displayBook('Harry Potter', 'J.K. Rowland', '500', 'has been read');
console.log(myLibrary);




/* const book1 = new Book('Harry Potter', 'J.K. Rowland', '500', 'has been read'); 

console.log(book1.info());

console.log(Object.getPrototypeOf(book1) === Book.prototype); */