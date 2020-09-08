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

//golbal constants;
const formDiv=document.getElementById('form');
const button=document.getElementById('add-book');


function generateForm(){
    //constants;
    function setAttributes(el,attr){for(var key in attr){ el.setAttribute(key,attr[key]);}}
    //create elements
    const form=document.createElement('form');
    const titleLabel=document.createElement('label');
    const titleInput=document.createElement('input');
    const authorLabel=document.createElement('label');
    const authorInput=document.createElement('input');
    const pageLabel=document.createElement('label');
    const pageInput=document.createElement('input');
    const readLabel=document.createElement('label');
    const readInput=document.createElement('input');
    const addButton = document.createElement('button');
    const br = document.createElement('br');

    addButton.textContent = 'Add Book';
    //set attributes;
    let inputs=[titleInput,authorInput,readInput];
    inputs.forEach(input=>{setAttributes(input,{'type':'text','reduired':''})});
    
    setAttributes(titleInput,{'placeholder':'Book Title','class':'title'})
    setAttributes(authorInput,{'placeholder':'Book Author','class':'author'})
    setAttributes(readInput,{'placeholder':'Read the Book?Yes/No','class':'status'})
    setAttributes(pageInput,{'placeholder':'Pages?','class':'pages','type':'number','reduired':''})
    setAttributes(form,{'id':'book-form'});
    setAttributes(addButton,{'id':'addNewBook'})
    //
    let allInputs = [...inputs,pageInput];
    allInputs.forEach(inputs=>{inputs.appendChild(br)});

    form.append(titleLabel,titleInput,authorLabel,authorInput,pageLabel,
        pageInput,readLabel,readInput,addButton);
    formDiv.appendChild(form);
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
    myLibrary.forEach(obj=>{
        const bookinfoDiv=document.getElementById('bookinfo');
        //create element;
    
        const bookDiv=document.createElement('div');
            bookDiv.setAttribute('id','bookDiv')
        const h1=document.createElement('h4');
        const para1=document.createElement('p');
        const h2=document.createElement('h4');
        const para2=document.createElement('p');
        const h3=document.createElement('h4');
        const para3=document.createElement('p');
        const h4=document.createElement('h4');
        const para4=document.createElement('p');
        const button=document.createElement('button');
        const delButtton=document.createElement('button');


        //text contents and attributes
        let htext = ['Book Title:','Book Author:','Num of pages:','Read Status:','Delete Book'];
        let ptext = [obj.title,obj.author,obj.pages,obj.status]
        h1.textContent=htext[0]
        h2.textContent=htext[1]
        h3.textContent=htext[2]
        h4.textContent= htext[3]

        para1.textContent= ptext[0]
        para2.textContent=ptext[1]
        para3.textContent=ptext[2]
        para4.textContent = ptext[3];

        button.textContent='Change Read';
            delButtton.setAttribute('id','delete')
            delButtton.textContent=htext[4];

        //functions;
        function changeRead(){para4.textContent = para4.textContent=='yes'? 'no':'yes';}

        function deleteBook(){
                bookinfoDiv.removeChild(bookDiv);
                for(i=0;i<myLibrary.length;i++){myLibrary.splice(i,1)}
        }
        //event listeners;
        delButtton.addEventListener('click',deleteBook);
        button.addEventListener('click',changeRead); 

        bookDiv.append(h1,para1,h2,para2,h3,para3,h4,para4,button,delButtton);
        bookinfoDiv.appendChild(bookDiv) 
    })
}

button.addEventListener('click',(e)=>{
    e.preventDefault();
    generateForm();
    button.setAttribute('disabled','')
    document.getElementById('addNewBook').addEventListener('click',function (e){
        e.preventDefault();
        const bookinfoDiv=document.getElementById('bookinfo');
        bookinfoDiv.innerHTML='';
        addBook();
        formDiv.innerHTML='';
        button.removeAttribute('disabled');
    })
});
