//dom elements
let addBookBtn = $(".add-btn"),
    addBookForm = $(".form-div")

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
addBookBtn.on('click', function(e) {
    e.preventDefault();
    addBookForm.css("display", "block");
    console.log('I have been clicked');
})