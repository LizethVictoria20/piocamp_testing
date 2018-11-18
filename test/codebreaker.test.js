// Import test
let test = require('assert');
var guess = require('../codebreaker');

describe( 'Test pass', function(){
  it('is true', function(){
     test.ok(true, true)
  })
})

describe('Codebreaker Test', function(){
    it('Debe retornar un 0-0- con 2968', function(){
        let result = guess('2968')
        test.equal(result, '0-0-', 'Retorna un 0-0-')
    })
    it('Debe retornar un 0-0- con 1967 ', function(){
        let result = guess('1967')
        test.equal(result, '0-0-', 'Retorna un 0-0-')
    })
    it('Debe retornar un X--X con 5932', function(){
        let result = guess('5932')
        test.equal(result, 'X--X', 'Retorna un X--X')
    })
    it('Debe retornar un -X0- con 9627', function(){
        let result = guess('9627')
        test.equal(result, '-X0-', 'Retorna un -X0-')
    })
    it('Debe retornar un --XX con 8712', function(){
        let result = guess('8712')
        test.equal(result, '--XX', 'Retorna un --XX')
    })
    it('Debe retornar un 000- con 1259', function(){
        let result = guess('1259')
        test.equal(result, '000-', 'Retorna un 000-')
    })
    it('Debe retornar un X-X- con 5917', function(){
        let result = guess('5917')
        test.equal(result, 'X-X-', 'Retorna un X-X-')
    })
    it('Debe retornar un ---X con 8972', function(){
        let result = guess('8972')
        test.equal(result, '---X', 'Retorna un ---X')
    })
    it('Debe retornar un XXX- con 5619', function(){
        let result = guess('5619')
        test.equal(result, 'XXX-', 'Retorna un XXX-')
    })
    it('Debe retornar un 00X- con 6218', function(){
        let result = guess('6218')
        test.equal(result, '00X-', 'Retorna un 00X-')
    })
    it('Debe retornar un --0X con 8752', function(){
        let result = guess('8752')
        test.equal(result, '--0X', 'Retorna un --0X')
    })
    it('Debe retornar un -0XX con 4512', function(){
        let result = guess('4512')
        test.equal(result, '-0XX', 'Retorna un -0XX')
    })
    it('Debe retornar un 000- con 1269', function(){
        let result = guess('1269')
        test.equal(result, '000-', 'Retorna un 000-')
    })
});