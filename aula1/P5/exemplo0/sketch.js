
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER)
}

function draw() {
	background(200);

	translate(width / 2, height / 2)

	fill("yellow")
	circle(0, 0, 100)

	drawMercury()
	drawEarth()
}

function drawEarth() {
	push()

	fill("blue")
	rotate(frameCount * 0.01)
	circle(width / 4, 0, 50)
	translate(width / 4, 0)

	drawMoon()

	pop()

}

function drawMoon() {
	push()

	fill("gray")
	rotate(frameCount * 0.05)
	circle(width / 16, 0, 10)
	translate(width / 4, 0)

	pop()
}

function drawMercury() {
	push()

	fill("red")
	rotate(frameCount * 0.07)
	circle(width / 8, 0, 5)
	translate(width / 8, 0)

	pop()
}

