function init() {
	var resultado = document.getElementById("resultado");
	var texture = document.getElementById("texture");
	var area = document.getElementById("area");
	var compactness = document.getElementById("compactness");
	var concavity = document.getElementById("concavity");
	var symmetry = document.getElementById("symmetry");
	var fractal = document.getElementById("fractal-dim");
	var calcular = document.getElementById("calcular");
	
	// Eventos
	calcular.onclick = function(e) {
		var result = calcRegLog(texture, area, compactness, concavity, symmetry, fractal);
		resultado.textContent = result;
	}
}

function calcRegLog(texture, area, compactness, concavity, symmetry, fractal) {
	nTexture = parseFloat(texture.value);
	nArea = parseFloat(area.value);
	nCompactness = parseFloat(compactness.value);
	nConcavity = parseFloat(concavity.value);
	nSymmetry = parseFloat(symmetry.value);
	nFractal = parseFloat(fractal.value);

	// formula = 1 / (1 + e ^ -(a + bx))
	regLog = - (19.85 - 0.29 * nTexture - 0.01 * nArea - 12.79 * nCompactness - 17.23 * nConcavity - 28.79 * nSymmetry + 31.80 * nFractal);
	regLog = 1 + Math.exp(regLog);
	regLog = 1 / regLog;

	if (regLog > 0.5) {
		result = "Benigno";
	} else {
		result = "Maligno";
	}

	return result;
}