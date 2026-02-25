function adicionar(valor) {
    document.getElementById("display").value += valor;
}

function limpar() {
    document.getElementById("display").value = "";
}

function calcular() {
    let display = document.getElementById("display");
    let expressao = display.value;

    if (expressao === "") return;

    try {
        // Corrige porcentagem estilo calculadora
        if (expressao.includes("%")) {
            let partes = expressao.split("%");

            if (partes.length === 2 && partes[1] === "") {
                // Ex: 50%  -> vira 0.5
                expressao = parseFloat(partes[0]) / 100;
            } else {
                // Ex: 50%10 -> vira (50 * 10 / 100)
                let numero1 = parseFloat(partes[0]);
                let numero2 = parseFloat(partes[1]);
                expressao = (numero1 * numero2) / 100;
            }
        }

        let resultado = eval(expressao);

        if (!isFinite(resultado)) {
            display.value = "Erro";
        } else {
            display.value = resultado;
        }

    } catch {
        display.value = "Erro";
    }
}