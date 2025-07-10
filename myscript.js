const myLibrary = [
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

function Book(title, author, pages, read){
    
    if (!new.target) {
        throw Error("please use the 'new' operator when calling this constructor")
    };
    
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        console.log(`${title} by ${author}, ${pages} pages, ${read}`)
    };
};

function addBookTolibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook)
};

function displayBooks() {
    const container = document.querySelector(".card-container")

    myLibrary.forEach((book) => {
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
    });
};

displayBooks();