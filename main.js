//consider removing the many ifs and replace with a single stmt..

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
    //constants;
    function setAttributes(el,attr){for(var key in attr){ el.setAttribute(key,attr[key]);}}
    //create elements
    
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

