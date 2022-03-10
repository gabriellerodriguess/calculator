function insertResult(num){
    let number = document.querySelector('#result').innerHTML 
    document.querySelector('#result').innerHTML = number + num
}

const clean = () => {document.querySelector('#result').innerHTML= ''}


const del = () => { 
    let resultado = document.querySelector('#result').innerHTML

    document.querySelector('#result').innerHTML = resultado.substring(0, resultado.length -1)

}

const calc = () => {
    let resultado = document.querySelector('#result').innerHTML
    if(resultado){
        document.querySelector('#result').innerHTML = eval(resultado)
    }
}