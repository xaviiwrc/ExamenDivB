
//hecho por xavier cortinas DIV B

function mostrar()
{
    let nacionalidad;
    let resultado;
    let edad;
    let cepa;
    let negativos;



for(i = 0; i < 8; i++){

nacionalidad = prompt("Ingrese su nacionalidad: 'argentina' 'extranjero'").toLowerCase();
while(!(nacionalidad == 'argentina' || nacionalidad == 'extranjero')){
    nacionalidad = prompt("Nacionalidad invalida, ingrese nuevamente").toLowerCase();
}
resultado = prompt("Su resultado es 'negativo' 'positivo'").toLowerCase();
while(!(resultado == 'positivo' || resultado == 'negativo')){
    resultado = prompt("resultado invalido, intente nuevamente").toLowerCase();
}
edad = parseInt(prompt("Ingrese su edad entre '18' a '65'"));
while(isNaN(edad) || edad < 18 || edad > 65){
    edad = parseInt(prompt("edad incorrecta, el permitido es de  '18' a '65'"));
}
cepa = prompt("Ingrese la cepa: 'delta' 'beta' 'alfa' ").toLowerCase();
while(!(cepa == 'delta' || cepa == 'alfa' ||cepa == 'beta' )){
      cepa = prompt("Invalido, vuelva a ingresar la cepa 'delta' 'beta' 'alfa'");
}






}



































}
