"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPonto2D = void 0;
var reader = require("readline-sync");
var Ponto2D_1 = require("../Ponto2D");
function menuPonto2D() {
    var message = "\t\t--------------------- Teste Ponto2D ----------------------\n\t\t-                                                        -\n\t\t- 0.  Terminar os testes.                                -\n\t\t- 1.  Exibir eixo o x.                                   -\n\t\t- 2.  Exibir eixo o y.                                   -\n\t\t- 3.  Definir eixo o x.                                  -\n\t\t- 4.  Definir eixo o y.                                  -\n\t\t- 5.  Comparar com outro ponto 2D.                       -\n\t\t- 6.  Exibir a dist\u00E2ncia em rela\u00E7\u00E3o a outro ponto 2D.    -\n\t\t- 7.  Clonar o ponto 2D.                                 -\n\t\t- 8.  Exibir o ponto 2D (string).                        -\n\t\t- 69. Exibir o ponto 2D (JSON).                          -\n\t\t-                                                        -\n\t\t--------------------- Teste Ponto2D ----------------------\n\t\t> ";
    var ponto = new Ponto2D_1.Ponto2D();
    var opt = 1;
    while (opt != 0) {
        console.clear();
        switch ((opt = Number(reader.question(message)))) {
            case 0: break;
            case 1:
                console.log(ponto.x);
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 2:
                console.log(ponto.y);
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 3:
                ponto.x = reader.questionInt('Valor: ');
                break;
            case 4:
                ponto.y = reader.questionInt('Valor: ');
                break;
            case 5: {
                var other = new Ponto2D_1.Ponto2D(reader.questionInt('x: '), reader.questionInt('y: '));
                console.log(ponto.equals(other));
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 6: {
                var other = new Ponto2D_1.Ponto2D(reader.questionInt('x: '), reader.questionInt('y: '));
                console.log(ponto.distancia(other));
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 7: {
                var cloned = ponto.clone();
                console.log(cloned.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 8:
                console.log(ponto.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 69:
                console.log(JSON.stringify(ponto));
                reader.question("Pressione a tecla enter para continuar");
        }
    }
}
exports.menuPonto2D = menuPonto2D;
