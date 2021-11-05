let myLibrary = [];

myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
myLibrary.push(new Book('The Dark Knight', 'David Omollo', '200', 'no'))
myLibrary.push(new Book("Crime and Punishment","Fyodor Doestky",685, "Yes"))

let addBookBtn = $('#new-book-btn'), formDiv = $("#form-div") , resulDiv = $('#user-books')

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

$(document).ready(function(){
    addBookBtn.on('click', (e)=>{
        e.preventDefault();
        formDiv.toggle('show');
    })

    renderBooks(); 
});

function renderBooks(){
    myLibrary.forEach(book => {
        let bookcard = 
        `<div class="card">
            <div class="card-header">
                <h6>${book.title}</h6>
            </div>
            <div class="card-body">
                <h6>Author: <span>${book.author}</span></h6>
                <h6>Pages: <span>${book.pages}</span></h6>
                <h6>Read: <span>${book.status}</span></h6>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-success">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
            </div>
        </div>`;
        resulDiv.append(bookcard);
    });
}
