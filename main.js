let addBookBtn = $('#new-book-btn')
let formDiv = $("#form-div")
function 

$(document).ready(function(){
    addBookBtn.on('click', (e)=>{
        e.preventDefault();
        formDiv.toggle('show');
    })
});

function renderBooks(){

}
