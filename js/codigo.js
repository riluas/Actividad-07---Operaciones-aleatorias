var operaciones=["+","-"];


var masMenos= Math.floor(Math.random() * +2);
var num1= Math.floor((Math.random() *10) +1);
var num2= Math.floor((Math.random() *10) +1);

var sol=0;
function solucion() {
  if (operaciones[0] == operaciones[masMenos]) {
    sol=num1+num2;
  }
    else {
      sol=num1-num2;
    }
}
solucion();

var usuario=Number(prompt(`Resultado de ${num1}${operaciones[masMenos]}${num2}`));
function comprobar() {
  if (eval(`${usuario}`) === eval(`${sol}`)) {
      alert("La respuesta es correcta");
  } else {
    alert(`La respuesta es incorrecta. \nLa respuesta correcta es ${sol}.`);
  };
}
comprobar();
console.log(eval(`${usuario}`) === eval(`${sol}`));
