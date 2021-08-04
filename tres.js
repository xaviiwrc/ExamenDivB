//hecho por xavier cortinas DIV B
function mostrar() {
	let origen;
	let cantvacunas = 0;
	let costovuelo;
	let vacunasmax;
	let descuento = 0;
	let promedio = 0;
	let acumasia = 0;
	let vacunasasia = 0;
	let importebruto = 0;
	let origenmax;
	let flag = 1;
	let acumvacunas = 0;
	let importetotal;
	let descuentosolo;


	for (let i = 0; i < 10; i++) {
		origen = prompt("Ingrese su origen: 'asia' 'europa' 'usa'").toLowerCase();
		while (!(origen == 'asia' || origen == 'europa' || origen == 'usa')) {
			origen = prompt("Origen incorrecto, vuelva a intentarlo: 'asia' 'europa' 'usa' ").toLowerCase();
		}
		cantvacunas = parseInt(prompt("Cantidad de vacunas"));
		while (isNaN(cantvacunas) || cantvacunas < 0) {
			cantvacunas = parseInt(prompt("Cantidad invalida, vuelva a ingresar nuevamente:"));
		}
		costovuelo = parseInt(prompt("Costo vuelo, (entre 1 millon y 5 millones de pesos)"));
		while (isNaN(costovuelo) || costovuelo < 1000000 && costovuelo > 5000000) {
			costovuelo = parseInt(prompt("precio invalido, vuelva a ingresar nuevamente:"));
		}
		importebruto += costovuelo;

		if (flag || cantvacunas > vacunasmax) {
			acumvacunas++;
			vacunasmax = cantvacunas;
			origenmax = origen;
			flag = 0;
		}
		if (origen == 'asia') {
			acumasia++;
			vacunasasia += cantvacunas;
		}







	}



	if (vacunasmax > 4000000) {
		descuentosolo = importebruto * .3;
		descuento = importebruto - (importebruto * .3);
		document.write("Descuento de " + descuentosolo + " y el importe final con descuento es " + descuento + "<br>");
	} else if (vacunasmax >= 2000000 && vacunasmax <= 4000000) {
		descuentosolo = importebruto * .2;                                                          // punto D
		descuento = importebruto - (importebruto * .2);
		document.write("Descuento de " + descuentosolo + " y el importe final con descuento es " + descuento + "<br>");
	} else if (vacunasmax < 2000000) {
		document.write("El importe bruto es " + importebruto + "<br>");
	}
	importetotal = descuento;

	promedio = vacunasasia / acumasia;






	document.write("El origen que envio mayor cantidad de vacunas es: " + origenmax + "<br>"); // punto A hecho
	document.write("El promedio de vacunas llegadas de asia es: " + promedio + "<br>"); // punto B hecho
	document.write("Total sin descuentos por gastos de viajes: " + importebruto + "<br>"); // punto C hecho


}
