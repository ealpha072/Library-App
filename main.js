//dom elements
let formDiv = document.querySelector('.form-div'),
    addbtn = document.querySelector('.add-btn'),
    bookDiv = document.querySelector('.books-div');
    submit = document.querySelector('.new-book')


let myLibrary=[];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
myLibrary.push(new Book('How to Loose Money','Alpha Emmanuel','200','yes'))
render();

//constructor
function Book(title,author,pages,status){
    this.title=title
    this.author=author
    this.pages=pages
    this.status=status
}



function generateForm(){
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
    //<button type="submit" class="btn btn-primary new-book" onclick="addBkToLib()" >Submit</button>
    formDiv.innerHTML = contents
}

function addBkToLib(){

    let bookTitle = document.querySelector('#book-title').value,
        bookAuthor = document.querySelector('#book-author').value,
        bookPages = document.querySelector('#book-pages').value,
        bookStatus = document.querySelector('#book-status').value;
    
    if(bookTitle==='' ||bookAuthor===''||bookPages===''||bookStatus===''){
        alert('Please fill in all fields!!!')
    }else{
        myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,bookStatus))
    }
    console.log(myLibrary)
}

function render(){
    myLibrary.forEach(book=>{

        let card = `
        <div>
            <h4>Author</h4>
            <p>${book.author}</p>
        </div>
        <div>
            <h4>Title</h4>
            <p>${book.title}</p>
        </div>
        <div>
            <h4>Pages</h4>
            <p>${book.pages}</p>
        </div>
        <div>
            <h4>Read Status</h4>
            <p>${book.status}</p>
        </div`,
        div = document.createElement('div');
        
        div.setAttribute('class','col book')
    div.innerHTML = card;
    bookDiv.appendChild(div)
    })
}

addbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateForm()
    submit.style.display ='block'
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    addBkToLib();
    bookDiv.innerHTML = '';
    render();
})


///to do , add rows to html to carry the books...