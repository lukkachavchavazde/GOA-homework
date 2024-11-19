const myp = document.getElementById('myp');
const mybutton = document.getElementById('mybutton');
const changeback = document.getElementById('changeback');


function changecolor(){
    myp.textContent = "my color is red"
    myp.style.color = "red"
}

mybutton.onclick = changecolor

function changebac(){
    myp.textContent ="my is black again"
    myp.style.color ='black'
}

changeback.onclick = changebac
