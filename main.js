let myLibrary = [];

myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money', 'Alpha Emmanuel', '200', 'yes'))
myLibrary.push(new Book('The Dark Knight', 'David Omollo', '200', 'no'))
myLibrary.push(new Book("Crime and Punishment","Fyodor Doestky",685, "Yes"))

let addBook = $('#new-book-btn'), formDiv = $("#form-div") , resultsHolder = $('#user-books'), addBkBtn = $('#add-book'), form = $('#form')

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}
renderBooks();

$(document).ready(function(){ 
    let btns = [$('.edit')], delbtns = [$('.delete')]

    addBook.on('click', (e)=>{
        e.preventDefault();
        formDiv.toggle('show');
    })

    addBkBtn.on('click',(e)=>{
        e.preventDefault()
        addNewBook()
        alert('New book added successfully!!')
        //form.reset();
        resultsHolder.html('');
        renderBooks();
        formDiv.toggle('hide')
    }) 

    btns.forEach(btn=>{
        btn.on('click',(e)=>{
            let target = e.target.parentNode.parentNode.children[0].innerHTML;

            for (var i = 0; i < myLibrary.length; i++) {
                if(myLibrary[i].title === target){
                    let bookIndex = myLibrary.indexOf( myLibrary[i] ),
                        bookToEdit = myLibrary[bookIndex]
                    //console.log(bookToEdit)
                    formDiv.toggle('show');
                    $('#title').val(bookToEdit.title)
                    $('#author').val(bookToEdit.author)
                    $('#pages').val(bookToEdit.pages)
                    $('#status').val(bookToEdit.status)
                    myLibrary.splice(bookIndex, 1);
                    resultsHolder.html('')
                    renderBooks();
                }
            }
        })
    })

    delbtns.forEach(btn=>{
        btn.on('click',(e)=>{
            e.preventDefault()
            let target = e.target.parentNode.parentNode.children[0].innerHTML;
            //console.log(target)
            for(var i = 0; i < myLibrary.length; i++){
                if(myLibrary[i].title === target){
                    myLibrary.splice(myLibrary.indexOf(myLibrary[i]), 1)
                    console.log(myLibrary)
                    resultsHolder.html('')
                    renderBooks();
                }
                //resultsHolder.html('')
                //renderBooks()
            }
        })
    })
});

function renderBooks(){
    myLibrary.forEach(book => {
        let bookrow = 
        `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.status}</td>
            <td>
                <button class='btn btn-primary btn-sm edit'> Edit</button>
            </td>
            <td>
                <button class='btn btn-primary btn-sm delete'> Delete</button>
            </td>            
        </tr>`
        resultsHolder.append(bookrow);
    });
}

function addNewBook(){
    let title = $('#title').val(), author = $('#author').val(), pages = $('#pages').val(), status = $('#status').val()
    myLibrary.push(new Book(title, author, pages, status));
}




