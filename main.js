//dom elements
let displayForm = $(".add-btn"),
    addBookForm = $(".form-div"),
    addNewBook = $(".new-book"),
    booksDiv = $(".books-div");

let myLibrary = [];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
render();

//constructor
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

//event listeners
displayForm.on('click', function(e) {
    e.preventDefault();
    addBookForm.toggleClass('hide')
        //addBookForm.css("display", "block");
        //console.log('I have been clicked');
})

addNewBook.on('click', (e) => {
    e.preventDefault();
    let bktitle = $("#book-title").val(),
        bkauthor = $("#book-author").val(),
        bkpages = $("#book-author").val(),
        bkstatus = $("#book-author").val();
    if (bktitle === '' || bkauthor === '' || bkpages === '' || bkstatus === '') {
        alert("Please fill in all the form inputs");
    } else {
        //bkstatus = bkstatus.toUpperCase();
        myLibrary.push(new Book(bktitle, bkauthor, bkpages, bkstatus));
        //console.log("Success")
        booksDiv.html('')
        render();
    }
})

///RENDER FUNCTION
function render() {
    myLibrary.forEach(book => {
        let card =
            `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 card">
                <div class="card-body">
                    <h5 class="card-title">Title: <p>${book.title}</p></h5>
                    <h5 class="card-title">Author: <p>${book.author}</p></h5>
                    <h5 class="card-title">Pages: <p>${book.pages}</p></h5>
                    <h5 class="card-title">Status: <p>${book.status}</p></h5>
                </div>
            </div>`
        booksDiv.append(card)
    })

}