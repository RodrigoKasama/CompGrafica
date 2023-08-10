base_raio = 200
screen_coef = 1.5

function setup() {
	createCanvas(500 * screen_coef, 350 * screen_coef);
}

function draw() {

	currH = hour();
	currM = minute();
	currS = second()

	background(200);

	// Resignifica a origem (0,0) para o meio do canvas -> Novo (0,0)
	translate(width / 2, height / 2);

	stroke("Black");

	strokeWeight(4);
	// Cria um circulo com origem (0,0) e DIÂMETRO x
	circle(0, 0, base_raio * 2);

	// Não deu certo....
	// beginShape();
	// for (let i = 0; i < 12; i++){
	// 	let angle = map(i, 0, 12, 0, TWO_PI);
	// 	vertex(base_raio * 0.8 * cos(angle), base_raio * 0.8 * sin(angle));
	// }
	// endShape();

	// Função map()
	// 1º Arg -> Valor de entrada
	// 2º e 3º -> Intervalo da entrada (Min e Max) ---> Apesar de hour ser [0, 23]. O limite do relogio analógico é [0, 12]
	// 4º e 5º -> Intervalo da saida --> A saida estará entre 0 e 2pi rad (Angulação)
	theta_H = map(currH % 12, 0, 12, 0, TWO_PI);
	theta_M = map(currM, 0, 60, 0, TWO_PI);
	theta_S = map(currS, 0, 60, 0, TWO_PI);

	// Para as horas, ainda precisamos adicionar um valor entre 0 e 1 referente a proporção de minutos que passou entre uma hora e outra. 
	// Ou seja, se já se passou 30 min, temos que add mais 30 /   60    = 0.5 à hora atual. A lógica se mantem para todos os  
	// 														   (1 HORA)
	theta_H += minute() / 60;

	raios_arr = [base_raio * 0.5, base_raio * 0.6, base_raio * 0.75];
	thetas_arr = [theta_H, theta_M, theta_S];

	strokeWeight(8);
	stroke(251, 124, 50);
	// Ponteiros - Hora | Minuto | Segundo
	for (let i = 0; i < thetas_arr.length; i++) {

		// Além disso, o inicio da função cicle é a posição (1, 0) do circulo trigonometrico. 
		// POr isso, temos que deslocar todos os ponteiros PI / 2 OU 90°.
		thetas_arr[i] -= HALF_PI;

		// Explicar isso
		Pxi = raios_arr[i] * cos(thetas_arr[i]);
		Pyi = raios_arr[i] * sin(thetas_arr[i]);

		// Com as posições calculadas, desenhamos os ponteiros de cada categoria
		if(i == 2) stroke("Red");
		line(0, 0, Pxi, Pyi);
	}
}