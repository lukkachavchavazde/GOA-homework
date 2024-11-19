let num1 = 100
let num2 = 200

function add2nums(){
    console.log(num1 + num2)
}

add2nums()


let str1 = "lu"
let str2 = "ka"

function add2str(){
    console.log(str1 + str2)
}

add2str()


const myimg = document.getElementById('myimg')
const mybtn = document.getElementById('mybtn')

function changeimgsize(){
    myimg.width = 500
    myimg.height = 500
}

mybtn.onclick = changeimgsize



