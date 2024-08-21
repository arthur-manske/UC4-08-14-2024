"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuContador = void 0;
var reader = require("readline-sync");
var Contador_1 = require("../Contador");
function menuContador() {
    var message = "\t\t-------------------- Teste Contador ----------------------\n\t\t-                                                        -\n\t\t- 0.  Terminar os testes.                                -\n\t\t- 1.  Incrementar o contador.                            -\n\t\t- 2.  Zerar o contador.                                  -\n\t\t- 3.  Exibir o valor do contador.                        -\n\t\t- 69. Exibir o contador (JSON).                          -\n\t\t-                                                        -\n\t\t-------------------- Teste Contador ----------------------\n\t\t> ";
    var contador = new Contador_1.Contador();
    var opt = 1;
    while (opt != 0) {
        console.clear();
        switch ((opt = Number(reader.question(message)))) {
            case 0: break;
            case 1:
                contador.incrementar();
                break;
            case 2:
                contador.zerar();
                break;
            case 3:
                console.log(contador.valor());
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 69:
                console.log(JSON.stringify(contador));
                reader.question("Pressione a tecla enter para continuar");
        }
    }
}
exports.menuContador = menuContador;
