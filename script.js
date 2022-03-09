function insertResult(num){
    let number = document.querySelector('#result').innerHTML 
    document.querySelector('#result').innerHTML = number + num
}

const clean = () => {document.querySelector('#result').innerHTML= ''}


function del(){
    let resultado = document.querySelector('#result').innerHTML
    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1)
}