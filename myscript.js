const myLibrary = [];

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
    
}