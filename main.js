//dom elements
let displayForm = $(".add-btn"),
    addBookForm = $(".form-div"),
    addNewBook = $(".new-book"),
    booksDiv = $(".books-div"),
    totalBooks = $("#book-count"),
    readBooks = $("#read-books"),
    notRead = $("#not-read");


//console.log(delBtn);
let myLibrary = [];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
myLibrary.push(new Book('The Dark Knight', 'David Omollo', '200', 'no'))
libLog();
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
})

addNewBook.on('click', (e) => {
    e.preventDefault();
    let bktitle = $("#book-title").val(),
        bkauthor = $("#book-author").val(),
        bkpages = $("#book-pages").val(),
        bkstatus = $("#book-status").val();
    if (bktitle === '' || bkauthor === '' || bkpages === '' || bkstatus === '') {
        alert("Please fill in all the form inputs");
    } else {
        myLibrary.push(new Book(bktitle, bkauthor, bkpages, bkstatus));
        booksDiv.html('')
        libLog();
        render();
    }
})

///RENDER FUNCTION
function render() {
    myLibrary.forEach(book => {
        let card =
            `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 card" id="book-info">
                <div class="card-body">
                    <div>
                        <h6>${book.title}</h6>
                        <p>By ${book.author}</p>
                        <p>Pages: ${book.pages}</p>
                        <p>Read book: ${book.status}</p>
                    </div>
                    <div class="buttons" style="height:50px">
                        <button class="btn btn-danger" id="del">Delete</button>
                        <button class="btn btn-success" id="edit">Edit</button>
                    </div>
                </div>
            </div>`
        booksDiv.append(card)
    })

    let delBtn = document.querySelectorAll("#del");
    let editBtn = document.querySelectorAll("#edit");

    delBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.parentNode.parentNode
            let bookToDelete = target.children[0].children[0].innerHTML
            for (var i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title === bookToDelete) {
                    let indexToDelete = myLibrary.indexOf(myLibrary[i]);
                    myLibrary.splice(indexToDelete, 1);
                    booksDiv.html('');
                    render()
                }
            }

        })
    })

    editBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let target = e.target.parentNode.parentNode,
                bookToEditTitle = target.children[0].children[0].innerHTML;
            console.log(bookToEditTitle);
            for (var i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].title === bookToEditTitle) {
                    let indexToEdit = myLibrary.indexOf(myLibrary[i]),
                        bookToEdit = myLibrary[indexToEdit];
                    //console.log(bookToEdit)
                    $("#book-title").val(bookToEdit.title)
                    $("#book-author").val(bookToEdit.author)
                    $("#book-pages").val(bookToEdit.pages)
                    $("#book-status").val(bookToEdit.status)

                }
            }



        })
    })
}



function libLog() {
    let numOfBooks = myLibrary.length,
        booksRead = [],
        booksNotRead = [],
        numOfBooksRead = '',
        numOfBooksNotRead = '';
    totalBooks.text(numOfBooks)
    for (var i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].status === 'yes') {
            booksRead.push(myLibrary[i])
            numOfBooksRead = booksRead.length
            readBooks.text(numOfBooksRead)
        } else {
            booksNotRead.push(myLibrary[i])
            numOfBooksNotRead = booksNotRead.length
            notRead.text(numOfBooksNotRead);
        }
    }
}