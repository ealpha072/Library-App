//dom elements
let displayForm = $(".add-btn"),
    addBookForm = $(".form-div"),
    addNewBook = $(".new-book");

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

//event listeners
displayForm.on('click', function(e) {
    e.preventDefault();
    addBookForm.css("display", "block");
    console.log('I have been clicked');
})

addNewBook.on('click', (e) => {
    e.preventDefault();
    let bktitle = $("#book-tile").val(),
        bkauthor = $("#book-author").val(),
        bkpages = $("#book-author").val(),
        bkstatus = $("#book-author").val();
    if (bktitle === '' || bkauthor === '' || bkpages === '' || bkstatus === '') {
        alert("Please fill in all the form inputs");
    } else {
        //bkstatus = bkstatus.toUpperCase();
        myLibrary.push(new Book(bktitle, bkauthor, bkpages, bkstatus));
        console.log("Success")
    }


})