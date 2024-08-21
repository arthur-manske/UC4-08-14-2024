"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuIndex = void 0;
var reader = require("readline-sync");
var Contador_1 = require("./Contador");
var Ponto2D_1 = require("./Ponto2D");
var NumeroComplexo_1 = require("./NumeroComplexo");
function menuIndex() {
    var message = "\t\t-------------------- UC4 08-14-2024 ----------------------\n\t\t-                                                        -\n\t\t- 0. Terminar testes.                                    -\n\t\t- 1. Inicia os testes do Contador.                       -\n\t\t- 2. Inicia os testes do Ponto2D.                        -\n\t\t- 3. Inicia os testes do NumeroComplexo.                 -\n\t\t-                                                        -\n\t\t------------- Escolha uma das op\u00E7\u00F5es acima ---------------\n\t\t> ";
    var opt = 1;
    while (opt != 0) {
        console.clear();
        switch ((opt = Number(reader.question(message)))) {
            case 0: return;
            case 1:
                (0, Contador_1.menuContador)();
                break;
            case 2:
                (0, Ponto2D_1.menuPonto2D)();
                break;
            case 3:
                (0, NumeroComplexo_1.menuNumeroComplexo)();
        }
    }
    console.clear();
}
exports.menuIndex = menuIndex;
