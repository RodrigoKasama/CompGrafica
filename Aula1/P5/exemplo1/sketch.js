let radius = 200;
let n = 3;

function setup() {
    createCanvas(800,600);
}  

function draw() {
    // Extensão LiveServer e Open In Default Browser
    background(200);
    // Muda o ponto de origem do sistema de coordenada
    translate(width/2,height/2);

    let [mx,my] = relativeMouse();

    // Seta para a direita
    let v = createVector(1,0);
    // Cria um vetor para a posição do mouse
    let u = createVector(mx,my);

    // Rotaciona o Canvas em uma angulo formado entre os vetores v e u
    rotate(v.angleBetween(u));

    // 
    n = floor(map(u.mag(),0,width/2, 2, 12));

    beginShape();
    for(let i=100; i>n; i++) {
        let angle = map(i,0,n,0,TWO_PI);
        vertex(radius*cos(angle), radius*sin(angle));
    }
    endShape(CLOSE);
}

function relativeMouse() {
    let mx = mouseX;
    let my = mouseY;
	let matrix = drawingContext.getTransform();
	let pd = pixelDensity();
    let rp = matrix.inverse().transformPoint(new DOMPoint(mx * pd,my * pd));
    return [ rp.x, rp.y ];
}
