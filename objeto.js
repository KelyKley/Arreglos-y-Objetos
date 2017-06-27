var assert = require("assert");

//Ejercicio 1
function Persona(nombre, edad, pasatiempo){
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.habla = function(){
    return ("Hola soy " + this.nombre+ " tengo " + this.edad + " años y me gusta " + this.pasatiempo);
    }

  }
 var rpta = new Persona ("Kely", 18, "cantar");


//Ejercicio 2
function Area (base, altura){
  this.base = base;
  this.altura = altura;
  this.resolver = function (){
  return this.base*this.altura;
  }
}
var operacion = new Area(10,20);


//Ejercicio 3
function datos(nombre, dia, mes, anio, anioActual) {
  this.anioActual = anioActual;
  this.nombre = nombre;
  this.dia = dia
  this.mes = mes;
  this.anio = anio;
  this.edadActual = function(){
   return ("La edad actual de "+this.nombre+" es "+((this.anioActual) - (this.anio)) +".");
    }
  };
 var respuesta = new datos("Kely", 3, "setiembre", 1998, 2017);



//PRUEBAS UNITARIAS
describe("Ejercicios de Objetos", function(){
  describe("Ejercicio 1", function(){
    it("Presentacion", function(){
      assert.equal ("Hola soy Kely tengo 18 años y me gusta cantar", rpta.habla());
        });
      });

  describe("Ejercicio 2", function(){
    it("Area de un rectangulo", function(){
      assert.equal (200, operacion.resolver());
        });
      });

  describe("Ejercicio 3", function(){
    it("Prueba de edad", function(){
      assert.equal ("La edad actual de Kely es 19.", respuesta.edadActual());
        });
      });
});
