//dom elements
let btn1 = $(".add-btn"),
    formDiv = $(".form-div");


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

//event listerners
$(".add-btn").on("click", (e) => {
    e.preventDefault();
    formDiv.style.display = "block";
})