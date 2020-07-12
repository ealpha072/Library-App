let myLibrary=[];

//add few books
myLibrary.push(new Book("Slaughterhouse-Five", "Kurt Vonnegut", 275, 'yes'));
myLibrary.push(new Book("Hitchhiker's Guide to the Galaxy", "Douglas Adams", 208, 'no'));
myLibrary.push(new Book("How to Win Friends and Influence People", "Dale Carnegie", 291, 'yes'));
render();

//constructor
function Book(title,author,pages,status){
	this.title=title
	this.author=author
	this.pages=pages
	this.status=status
}

//creating a form on click;
	const formDiv=document.getElementById('form')
	const form=document.createElement('form');
		form.setAttribute('id','book-form');
	//constants;
	const titleLabel=document.createElement('label');
		titleLabel.textContent='Book Title';
	const titleInput=document.createElement('input');
		titleInput.setAttribute('type','text');
		titleInput.setAttribute('placeholder','Book Title');
		titleInput.setAttribute('reduired',''); 
		titleInput.setAttribute('class','title')

	const authorLabel=document.createElement('label');
		authorLabel.textContent='Book Author'
	const authorInput=document.createElement('input');
		authorInput.setAttribute('type','text');
		authorInput.setAttribute('placeholder','Book Author');
		authorInput.setAttribute('reduired',''); 
		authorInput.setAttribute('class','author')

	const pageLabel=document.createElement('label');
		pageLabel.textContent='Num of pages'
	const pageInput=document.createElement('input');
		pageInput.setAttribute('type','text');
		pageInput.setAttribute('placeholder','Number of pages');
		pageInput.setAttribute('reduired',''); 
		pageInput.setAttribute('class','pages')

	const readLabel=document.createElement('label');
		readLabel.textContent='Have you read this book?';
	const readInput=document.createElement('input');
		readInput.setAttribute('type','text');
		readInput.setAttribute('placeholder','Indicate yes or no');
		readInput.setAttribute('reduired',''); 
		readInput.setAttribute('class','status');

		
function createForm(){
	form.append(titleLabel,titleInput,authorLabel,authorInput,pageLabel,
		pageInput,readLabel,readInput);
	formDiv.appendChild(form);
}



function addBook(){
	
	const bktitle=document.querySelector('.title').value;
	const bkauthor=document.querySelector('.author').value;
	const bkpages=document.querySelector('.pages').value;
	const bkstatus=document.querySelector('.status').value;

	if(bktitle=='' || bkauthor=='' ||bkpages==''||bkstatus==''){
		alert('Please fill in all the details')
	}else {
		myLibrary.push(new Book(bktitle,bkauthor,bkpages,bkstatus));
		}
	
	render()
}


//displaying lib contents
const bookinfoDiv=document.getElementById('bookinfo');

function render(){
	myLibrary.forEach(function(obj){
		
		const bookinfoDiv=document.getElementById('bookinfo');
		const bookDiv=document.createElement('div');
			bookDiv.setAttribute('id','bookDiv')
		const h1=document.createElement('h4')
			h1.textContent='Book Title:'
		const para1=document.createElement('p');
			para1.textContent=obj.title;
		const h2=document.createElement('h4');
			h2.textContent='Book Author:'
		const para2=document.createElement('p');
			para2.textContent=obj.author;
		const h3=document.createElement('h4');
			h3.textContent='Num of pages:'
		const para3=document.createElement('p');
			para3.textContent=obj.pages;
		const h4=document.createElement('h4');
			h4.textContent='Read Status:'
		const para4=document.createElement('p');
			para4.textContent=obj.status;
		const button=document.createElement('button');
            button.textContent='Change Read';
            button.addEventListener('click',function changeRead()
            {
              if(para4.textContent=='yes')
              	{
                	para4.textContent='no'
              	}else {
                para4.textContent='yes'
              	}
            })
        const delButtton=document.createElement('button');
        	delButtton.setAttribute('id','delete')
        	delButtton.textContent='Delete Book';
        	
  
  		bookDiv.append(h1,para1,h2,para2,h3,para3,h4,para4,button,delButtton);
		bookinfoDiv.appendChild(bookDiv)
	})
}

//event listeners
const button=document.getElementById('add-book');
	button.addEventListener('click',createForm);
document.getElementById('addNewBook').addEventListener('click',function (){
	bookinfoDiv.innerHTML='';
	addBook()})