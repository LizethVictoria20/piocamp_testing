var realNumber = "5612";

const guess = function(number) {
  let realNumberArr = realNumber.split("")
  let numberArr = number.split("")

  var resultado = ''
  var existe = false


  for(let i = 0; i < numberArr.length; i++){
    existe = false
    for(let j = 0; j < realNumberArr.length; j++){
      if(numberArr[i] === realNumberArr[j]){
        existe = true
        if(i === j){
          resultado =  resultado + 'X'
        }
        else {
          resultado = resultado + '0'
        }
      }
    }
    if (existe === false) {
      resultado = resultado + '-'
    }
  }

  return resultado;
}
module.exports = guess;