let pontos = [];
let selecionado = null;

function setup() {
    createCanvas(800, 600);
    pontos = [
        createVector(10, height / 2),
        createVector(width - 10, height / 2),
        createVector(width / 2, 10)
    ];
}

function ponto(A) {
    circle(A.x, A.y, 10);
}

function combina(A, B, t) {
    return {
        x: (1 - t) * A.x + t * B.x,
        y: (1 - t) * A.y + t * B.y
    };
}

function draw() {

    let [A, B, C] = pontos;
    let D, E, F;

    background(200);
        noFill();

    line(A.x, A.y, C.x, C.y)
    line(C.x, C.y, B.x, B.y)

    beginShape();
    for (let t = 0; t <= 1.0; t += 0.05) {
        D = combina(A, C, t);
        E = combina(C, B, t);
        F = combina(D, E, t);
        vertex(F.x, F.y);
    }
    vertex(B.x, B.y);
    endShape();

    desenhaPontos();
}

function desenhaPontos() {

    // Apesar de ser um ponto conceitualmente, mouse é um vetor
    let vmouse = createVector(mouseX, mouseY);
    selecionado = null;

    // Para todos os pontos, caso a distancia entre o mouse e o currPonto é menor que X... 
    // Desenha o ponto com a cor de acordo com a distancia entre os elementos.
    for (let p of pontos) {
        // Calcula a distancia do ponto com o vetor do mouse
        if (vmouse.dist(p) < 10) {
            selecionado = p;
            fill("#ff0000");
        } else {
            fill("#ffffff");
        }
        ponto(p);
    }
}

function mouseDragged() {
    if (selecionado) {
        selecionado.set(mouseX, mouseY);
    }
}
