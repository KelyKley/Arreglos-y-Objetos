var assert = require("assert");

//Ejercicio 1
function multiplicarNumeros(arr , num)
{

  var res = arr.reduce(function(total,actual){
    return total*actual;
  });
  if(!isNaN(num)){
    res = res * num;
  }
  return res;
}


//Ejercicio 2

function ejercicio2(telefonos, filtro)
{
  return telefonos.filter(function(a){
    var primeras = a.toString().substr(0,3);
    var ultimas = a.toString().substr(-3);
    return (primeras == filtro || ultimas==filtro);
  });
}


//Ejercicio 3
  function multiplos(numeros,numerito){
    var arr=[];
    numeros.forEach(function(multi) {
        resultado= multi % numerito;
    if(resultado==0){
          arr.push(multi);
        }
    });
    return arr;
  }


//Ejercicio4

function numeros(arr){
   var dobles = arr.map(function(x) {
   return (x * 2)+1;
  });
  return dobles;
}


//Ejercicio 5
function convertir(arr) {
    var conversion = arr.map(function(grados){
        return(grados * 9 / 5 + 32);
    });
    return conversion;
}


//Ejercicio 6
function multiplicar (arr){
    var multiplicacion = arr.reduce(function(op1, op2){
      return op1 * op2;
    });
    return multiplicacion;
}


//Ejercicio 7
function seleccionar(edades){
  var arr = [];
var select = edades.forEach(function (edadActual){
  if((edadActual > 18) && (edadActual % 2 == 0)){
    var nacimientoFecha = (2017 - edadActual);
    arr.push(nacimientoFecha);
  }
});
return arr;
}



//PRUEBAS UNITARIAS
describe("Ejercicios de arreglos", function(){
  describe("Ejercicio 1", function(){
    it("Prueba de [4,4,5,12] y 9", function(){
      assert.equal (8640, multiplicarNumeros([4,4,5,12], 9))
    });
  });

  describe("Ejercicio 2", function(){
    it("cuando es [784123123, 355676784, 3423543554 ], 784", function(){
      assert.deepEqual([784123123, 355676784], ejercicio2([784123123, 355676784, 3423543554],784));
    });
  });

    describe("Ejercicio 3", function(){
      it("Multiplos", function(){
          assert.deepEqual([7,21,77,35],multiplos([7,21,44,80,77,35],7));
      });
    });

    describe("Ejercicio 4", function(){
      it("Operaciones con  números", function(){
          assert.deepEqual([5,11,15,5,7,17,21],numeros([2,5,7,2,3,8,10]));
      });
    });

    describe("Ejercicio 5", function(){
      it("Grados Celcius a Farenheit", function(){
          assert.deepEqual([212, 113, 167],convertir([100,45,75]));
      });
    });

    describe("Ejercicio 6", function(){
      it("Multiplicar ", function(){
          assert.equal(24,multiplicar([1,2,3,4]));
      });
    });

    describe("Ejercicio 7", function(){
      it("Seleccionar las edades mayores a 18 y devolver sus fechas de nacimiento", function(){
        assert.deepEqual([1997, 1977, 1975], seleccionar([20, 40, 37, 25, 42]));
      });
    });
});
