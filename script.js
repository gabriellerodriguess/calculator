function insertResult(num){
    let number = document.querySelector('#result').innerHTML 
    document.querySelector('#result').innerHTML = number + num
}

const clean = () => {document.querySelector('#result').innerHTML = ''}