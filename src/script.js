function calculaGastoMetabolico() {
	let sexo = document.getElementById('sexo').value;
	let peso = document.getElementById('peso').value;
	let altura = document.getElementById('altura').value;
	let idade = document.getElementById('idade').value;
	let fatorAtividade = document.getElementById('fatorAtividade').value;

	let TMB;
	if (sexo === 'feminino') {
		TMB = 447.593 + 9.247 * peso + 3.098 * altura - 4.33 * idade;
	} else {
		TMB = 88.362 + 13.397 * peso + 4.799 * altura - 5.677 * idade;
	}
	let gastoMetabolico = TMB * fatorAtividade;
	let gastoMetabolicoAproximado = gastoMetabolico.toFixed(3);

	// document.getElementById('resultado').style.flexDirection = 'column';
	document.getElementById('resultado').style.textAlign = 'center';
	document.getElementById('nota').innerHTML = '';
	document.getElementById('titulo-resultado').style.padding = '20%';
	document.getElementById('titulo-resultado').innerHTML = `Result`;
	document.getElementById('resultado-kcal').innerHTML =
		gastoMetabolicoAproximado + ' kcal';
}
