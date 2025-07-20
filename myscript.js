class Library {
    static existingBooks = []
    constructor() {
        Library.existingBooks = [
            {
                id: "123e4567-e89b-12d3-a456-426614174002",
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                pages: 281,
                read: "read",
                info: function () {
                  console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
                }
              },
              {
                id: "123e4567-e89b-12d3-a456-426614174003",
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                pages: 180,
                read: "unread",
                info: function () {
                  console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
                }
              }
        ];
    }
    static displayBooks() {
        const container = document.querySelector(".card-container")
    
        Library.existingBooks.forEach((book) => {
            const card = document.createElement("div");
            card.className = "card"
            container.appendChild(card);
            
            const title = document.createElement("div");
            title.textContent = book.title;
            card.appendChild(title);
            
            const author = document.createElement("div");
            author.textContent = book.author;
            card.appendChild(author);
            
            const pages = document.createElement("div");
            pages.textContent = `${book.pages} pages`;
            card.appendChild(pages);
    
            const read = document.createElement("div");
            read.textContent = `${book.read} pages`;
            card.appendChild(read);
    
            const deleteBtn = document.createElement("button");
            deleteBtn.type="button"
            deleteBtn.className="book-btn"
            deleteBtn.textContent="Delete"
    
            card.appendChild(deleteBtn);
    
            deleteBtn.addEventListener("click", () => {
                this.deleteBook(book.id)
            });
    
            const readBtn = document.createElement("button");
            readBtn.type="button";
            readBtn.className="book-btn";
            readBtn.textContent="Read Status";
    
            card.appendChild(readBtn);
    
            readBtn.addEventListener("click", () => {
                if (book.read === "read") {
                    book.read = "unread";
                } else {
                    book.read = "read";
                };
    
                Library.refreshBooks();
            });
    
        });
    }

    deleteBook(id) {
        Library.existingBooks = Library.existingBooks.filter((book) => {
            return id !== book.id;
        });
    
        Library.refreshBooks();
    }

    static refreshBooks() {
        const cards = document.querySelectorAll(".card");
            
        cards.forEach((card) => {
            card.remove();
        });
        
        Library.displayBooks();
    }

    createBookForm() {
        const bookFormContainer = document.createElement("div");
        bookFormContainer.className = "book-form-container";
    
        const bookForm = document.createElement("div");
        bookForm.className = "book-form";
    
        document.body.appendChild(bookFormContainer);
        bookFormContainer.appendChild(bookForm);
    
        const titleInput = document.createElement("input");
        titleInput.type="text";
        titleInput.className="book-form-input";
        titleInput.name="title"
    
        const titleLabel = document.createElement("label");
        titleLabel.for="title";
        titleLabel.textContent="Title";
    
        bookForm.appendChild(titleLabel);
        bookForm.appendChild(titleInput);
    
        const authorInput = document.createElement("input");
        authorInput.type="text";
        authorInput.className="book-form-input";
        authorInput.name="author";
    
        const authorLabel = document.createElement("label");
        authorLabel.for="author";
        authorLabel.textContent="Author";
    
        bookForm.appendChild(authorLabel);
        bookForm.appendChild(authorInput);
        
        const pagesInput = document.createElement("input");
        pagesInput.type="text";
        pagesInput.className="book-form-input"
        pagesInput.name="pages";
    
        const pagesLabel = document.createElement("label");
        pagesLabel.for="pages";
        pagesLabel.textContent="Pages";
    
        bookForm.appendChild(pagesLabel);
        bookForm.appendChild(pagesInput);
    
        const readInput = document.createElement("input");
        readInput.type="text";
        readInput.className="book-form-input";
        readInput.name="read";
    
        const readLabel = document.createElement("label");
        readLabel.for="read";
        readLabel.textContent="Read";
    
        bookForm.appendChild(readLabel);
        bookForm.appendChild(readInput);
    
        const addBookBtn = document.createElement("button");
        addBookBtn.type = "button";
        addBookBtn.textContent="Submit"
        addBookBtn.className = "book-form-button";
    
        bookForm.appendChild(addBookBtn);
        
        addBookBtn.addEventListener("click", () => {
            console.log(Library.existingBooks)
            Library.existingBooks.push(new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value));
        
            Library.refreshBooks();
        
            bookFormContainer.remove();
        });
    }
    
}

class Book {
    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info(){
        console.log(`${title} by ${author}, ${pages} pages, ${read}`)
    }
}

const newLibrary = new Library();

Library.displayBooks();

const getBookFormBtn = document.querySelector(".add-book");

getBookFormBtn.addEventListener("click", newLibrary.createBookForm)