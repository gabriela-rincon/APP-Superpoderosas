import validator from "./validator.js";

const objectdata = document.getElementById("formulario1");
ingresar = document.getElementById('ingresar');
ingresar.addEventListener("click",pagar);
const objectdata = document.getElementById("formulario1");
objectdata.addEventListener("submit", enmascarar); 
//objectdata.addEventListener("submit", validar);        //addEventListener

    //var sumatoria=0;
//var dato="fsdfsdf90";
    //alert(validator.maskify(dato));
//console.log(validator.maskify("datonumero"));


function enmascarar(){
    const datonumero = document.getElementById("number").value;
    alert ("Su número de tarjeta es " + validator.maskify(datonumero) + "\n" + validator.isValid(datonumero))
    
}

/*function validar(){
    const datonumero = document.getElementById("number").value;
    alert (validator.isValid(datonumero))

}*/
///Console.log(validator.maskify(datonumero)); //variable, funcion, metodo
//console.log(validator.isValid(30630138407745)) ; 