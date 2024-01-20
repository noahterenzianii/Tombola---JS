const tombola = document.getElementById("tombola");
const estrai = document.getElementById("estrai");
let numeriEstratti = [];

for (let i = 1; i <= 90; i += 10) {
    let riga = document.createElement("tr");
    for (let j = i; j < 10 + i; j++) {
        let colonna = document.createElement("td");
        riga.appendChild(colonna);
        colonna.setAttribute("id", `${j}`);
        colonna.innerHTML = "_";
    }
    tombola.appendChild(riga);
}

estrai.onclick = () => {
    let numero;
    let controllo;
    if (numeriEstratti.length != 90) {
        do {
            controllo = true;
            numero = Math.floor(Math.random() * 90) + 1;
            if (!numeriEstratti.includes(numero)) {
                numeriEstratti.push(numero);
                controllo = false;
            }
        } while (controllo);
        document.getElementById(`${numero}`).innerHTML = numero;
    }
    else
    alert("hai estratto tutti i numeri");
}