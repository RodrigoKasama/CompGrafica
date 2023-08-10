Rh = 120
Rm = 190

function setup() {
	createCanvas(800,600);
}  

function draw() {
	
	ponteiroH = createVector(Rh, 0);


	background(200);
	translate(width/2,height/2);

	circle(0, 0, 400);

	line(0, 0, Rh, 0);
	line(0, 0, Rm, 0);



}


function calc_theta_h(){




}