function init() {
	var resultado = document.getElementById("resultado");
	var radius = document.getElementById("radius");
	var texture = document.getElementById("texture");
	var perimeter = document.getElementById("perimeter");
	var area = document.getElementById("area");
	var smoothness = document.getElementById("smoothness");
	var compactness = document.getElementById("compactness");
	var concavity = document.getElementById("concavity");
	var concave_points = document.getElementById("concave-points");
	var symmetry = document.getElementById("symmetry");
	var fractal = document.getElementById("fractal-dim");
	var calcular = document.getElementById("calcular");
	
	// Eventos
	calcular.onclick = function(e) {
		var result = calcRegLog(radius, texture, perimeter, area, smoothness, compactness, concavity, concave_points, symmetry, fractal);
		resultado.textContent = result;
	}

}

function calcRegLog(radius, texture, perimeter, area, smoothness, compactness, concavity, concave_points, symmetry, fractal) {
	nRadius = parseFloat(radius.value);
	nTexture = parseFloat(texture.value);
	nPerimeter = parseFloat(perimeter.value);
	nArea = parseFloat(area.value);
	nSmoothness = parseFloat(smoothness.value);
	nCompactness = parseFloat(compactness.value);
	nConcavity = parseFloat(concavity.value);
	nConcave_points = parseFloat(concave_points.value);
	nSymmetry = parseFloat(symmetry.value);
	nFractal = parseFloat(fractal.value);

	// formula = 1 / (1 + e ^ -(a + bx))
	regLog = - (7.36 + 2.05 * nRadius - 0.38 * nTexture + 0.07 * nPerimeter - 0.04 * nArea - 76.43 * nSmoothness + 1.46 * nCompactness - 8.47 * nConcavity - 66.82 * nConcave_points - 16.28 * nSymmetry + 68.34 * nFractal);
	regLog = 1 + Math.exp(regLog);
	regLog = 1 / regLog;

	if (regLog > 0.5) {
		result = "Benigno";
	} else {
		result = "Maligno";
	}

	return result;
}