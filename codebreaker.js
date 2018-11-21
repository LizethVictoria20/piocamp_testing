var realNumber = "5612";

const guess = function(number) {
  let realNumberArr = realNumber.split("")
  let numberArr = number.split("")

  var resultado = ''
  var existe = false


  //PRUEBAS CON MAS O MENOS DE 4 NUMEROS
  if(number.length < 4){
    resultado = resultado + 'MENOS DE 4 NUMEROS🚫'
    return resultado
  }
  if(number.length > 4){
    resultado = resultado + 'MAS DE 4 NUMEROS🚫'
    return resultado
  }

  //PRUEBAS CON LETRAS
   for(let posicion = 0; posicion < number.length; posicion++){
     var valorDecimal = number.charCodeAt(posicion) //Valor decimal del caracter
      if( valorDecimal < 48 || valorDecimal > 57 ){
        resultado = resultado + 'ERROR'
        return resultado
      }
   }



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