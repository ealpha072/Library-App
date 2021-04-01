//dom elements


let myLibrary = [];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
    //render();

//constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//generate form
function generateForm() {
    let contents =
        `<form action="">
            <div class="form-group">
                <label for="title">Book Title</label>
                <input type="text" class="form-control" id="book-title" placeholder="Enter Book Title">
            </div>
            <div class="form-group">
                <label for="author">Book Author</label>
                <input type="text" class="form-control" id="book-author" placeholder="Enter Book author">
            </div>
            <div class="form-group">
                <label for="pages">Book Pages</label>
                <input type="text" class="form-control" id="book-pages" placeholder="Enter Number of Pages">
            </div>
            <div class="form-group">
                <label for="Status">Book Status</label>
                <input type="text" class="form-control" id="book-status" placeholder="Have you read the book? Yes/No">
            </div>        
        </form>`
}

//add book to library
function addBkToLib() {

    let bookTitle = $('#book-title').value,
        bookAuthor = $('#book-author').value,
        bookPages = $('#book-pages').value,
        bookStatus = $('#book-status').value;

    if (bookTitle === '' || bookAuthor === '' || bookPages === '' || bookStatus === '') {
        alert('Please fill in all fields!!!')
    } else {
        myLibrary.push(new Book(bookTitle, bookAuthor, bookPages, bookStatus))
    }
    console.log(myLibrary)
}

//show each book in the library
function render() {
    myLibrary.forEach(book => {

    })
}