let juego = ["piedra", "papel", "tijera"];
let victorias = 0;
let derrotas = 0;
let partidas = [];

function jugar(numero) {
    let npc = Math.floor(Math.random() * 3);
    if (juego[numero] == juego[npc]) {
        document.getElementById("resultado").innerHTML = "Empate";
        partidas.unshift(juego[numero] + "-" + juego[npc]);
        document.getElementById("historial").innerHTML = partidas.join("<br>" + "<br>");
    };

    if ((juego[numero] == "piedra" && juego[npc] == "tijera") || (juego[numero] == "papel" && juego[npc] == "piedra") ||
        (juego[numero] == "tijera" && juego[npc] == "papel")) {
        document.getElementById("resultado").innerHTML = "Ganaste";
        victorias++;
        document.getElementById("victorias").innerHTML = victorias;
        partidas.unshift(juego[numero] + "-" + juego[npc]);
        document.getElementById("historial").innerHTML = partidas.join("<br>" + "<br>");
    };

    if ((juego[numero] == "piedra" && juego[npc] == "papel") || (juego[numero] == "papel" && juego[npc] == "tijera") ||
        (juego[numero] == "tijera" && juego[npc] == "piedra")) {
        document.getElementById("resultado").innerHTML = "Perdiste";
        derrotas++;
        document.getElementById("derrotas").innerHTML = derrotas;
        partidas.unshift(juego[numero] + "-" + juego[npc]);
        document.getElementById("historial").innerHTML = partidas.join("<br>" + "<br>");
    };

    if (partidas.length > 4) {
        partidas.pop();
    };
};