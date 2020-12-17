//dom elements
let formDiv = document.querySelector('.form-div'),
    addbtn = document.querySelector('.add-btn'),
    bookDiv = document.querySelector('.books-div');

let myLibrary=[];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends", "Dale Carnegie", 291, 'yes'));
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
            <input type="text" class="form-control" id="book-Status" placeholder="Have you read the book? Yes/No">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>`
    formDiv.innerHTML = contents
}

function addBook(){
    
    const bktitle=document.querySelector('.title').value;
    const bkauthor=document.querySelector('.author').value;
    const bkpages=document.querySelector('.pages').value;
    const bkstatus=document.querySelector('.status').value;
    

    if (bktitle===''||bkauthor===''||bkpages===''||bkstatus=='') {alert('All fields must be filled!')
        }else{myLibrary.push(new Book(bktitle,bkauthor,bkpages,bkstatus))};
    render();
}

function render(){
    function changeRead(){para4.textContent = para4.textContent=='yes'? 'no':'yes';}
}

addbtn.addEventListener('click',generateForm)
