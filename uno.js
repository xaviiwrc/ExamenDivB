//hecho por xavier cortinas DIV B
function mostrar() {
	let edad;
	let vacuna;
	let nombre;
	let dosis;
	let sexo;
	let contVacunados = 0;
	let acumAm = 0;
	let contAmMayores = 0;
	let acumCh = 0;
	let contRu = 0;
	let contAm = 0;
	let contCh = 0;
	let promRuso = 0;
	let MMayorEdad;
	let NMayorEdad;
	let vacunaMayorEdad;
	let acumRu = 0;
	let porcentajeMayores = 0;
	let flag = 1;
	let porcentajeDD = 0;
	let vacunamenosuso;
	let seguir;
	let contDD;

	do {
		nombre = prompt("ingrese un nombre (entre 3 y 10 caracteres)").toLowerCase();
		while (nombre.length <= 3 || nombre.length >= 10) {
			nombre = prompt("invalido, el nombre pongalo entre 3 y 10 caracteres porfavor").toLowerCase();
		}
		edad = parseInt(prompt("ingrese una edad (a partir de 12)"));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("invalida, menores de 12 no pueden vacunarse"));
		}

		vacuna = prompt("ingrese la vacuna, 'rusa' 'americana'  'china'").toLowerCase();
		while (edad >= 12 && edad <= 17 && vacuna != "americana") {

			vacuna = prompt("invalido, menores solo pueden vacunarse con la americana").toLowerCase();

		} vacuna = prompt("ingrese la vacuna, 'rusa' 'americana'  'china'").toLowerCase();
		while (!(vacuna == "rusa" || vacuna == "americana" || vacuna == "china")) {
			vacuna = prompt("invalido, vuelva a ingresar la vacuna 'rusa' 'americana'  'china'").toLowerCase();
		}
		contVacunados++;
		dosis = prompt("Ingrese 'p' si es su primera dosis o 's' si es su segunda").toLowerCase();
		while (!(dosis == 'p' || dosis == 's')) {
			dosis = prompt("Invalido, porfavor vuelva a intentar con 'p' o 's'").toLowerCase();
		}
		contDD++;
		sexo = prompt("ingrese su sexo, 'f' o 'm'").toLowerCase();
		while (!(sexo == 'f' || sexo == 'm')) {
			sexo = prompt("invalido, reingrese sexo 'f' o 'm'").toLowerCase();
		}
		if (flag || sexo == 'f' && edad > MMayorEdad) {

			MMayorEdad = edad;
			NMayorEdad = nombre;
			vacunaMayorEdad = vacuna;
			flag = 0;
		}
		if (vacuna == "americana") {
			acumAm += edad;
			contAm++;
			if (edad >= 18) {
				contAmMayores++;
			}
		} else if (vacuna == "China") {
			acumCh += edad;
			contCh++;
		}
		else {
			acumRu += edad;
			contRu++;
		}
		seguir = prompt("Desea seguir? 's':").toLowerCase();
	} while (seguir == "s");
	{
		promRuso = acumRu / contRu;
		porcentajeMayores = contAm * 100 / contAmMayores;
		porcentajeDD = contDD * 100 / contVacunados;
	}
	if (contRu < contAm && contRu < contCh) {
		vacunamenosuso = "rusa";
	}
	else if (contAm <= contRu && contAm < contCh) {
		vacunamenosuso = "americana";
	}
	else {
		vacunamenosuso = "china";
	}

	document.write("Promedio edad gente que se vacuno con la Rusa " + promRuso + "<br>");   // A
	document.write("Nombre de la mujer con mas edad " + NMayorEdad + " y se vacuno con la " + vacunaMayorEdad + "<br>"); // B
	document.write("el procentaje de mayores de edad de los vacunados con la americana es " + porcentajeMayores + "<br>"); // C
	document.write("el procentaje de los de la segunda dosis es " + porcentajeDD + "<br>"); // D
	document.write("la vacuna menos usada es " + vacunamenosuso + "<br>"); // E


}

