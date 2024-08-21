"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuNumeroComplexo = void 0;
var reader = require("readline-sync");
var NumeroComplexo_1 = require("../NumeroComplexo");
function menuNumeroComplexo() {
    var message = "\t\t----------------- Teste NumeroComplexo -------------------\n\t\t-                                                        -\n\t\t- 0.  Terminar os testes.                                -\n\t\t- 1.  Exibir o n\u00FAmero real.                              -\n\t\t- 2.  Exibir o n\u00FAmero imagin\u00E1rio.                        -\n\t\t- 3.  Definir o n\u00FAmero real.                             -\n\t\t- 4.  Definir o n\u00FAmero imagin\u00E1rio.                       -\n\t\t- 5.  Exibir a adi\u00E7\u00E3o com outro n\u00FAmero complexo.         -\n\t\t- 6.  Exibir a subtra\u00E7\u00E3o com outro n\u00FAmero complexo.      -\n\t\t- 7.  Exibir a multiplica\u00E7\u00E3o com outro n\u00FAmero complexo.  -\n\t\t- 8.  Exibir a divis\u00E3o com outro n\u00FAmero complexo.        -\n\t\t- 9.  Igular a adi\u00E7\u00E3o com outro n\u00FAmero complexo.         -\n\t\t- 10. Igular a subtra\u00E7\u00E3o com outro n\u00FAmero complexo       -\n\t\t- 11. Igular a multiplica\u00E7\u00E3o com outro n\u00FAmero complexo   -\n\t\t- 12. Igular a divis\u00E3o com outro n\u00FAmero complexo         -\n\t\t- 13. Exibir o m\u00F3dulo do n\u00FAmero complexo.                -\n\t\t- 14. Comparar com outro n\u00FAmero complexo.                - \n\t\t- 15. Exibir o n\u00FAmero complexo (string).                 - \n\t\t- 69. Exibir o n\u00FAmero complexo (JSON).                   -\n\t\t-                                                        -\n\t\t----------------- Teste NumeroComplexo -------------------\n\t\t> ";
    var complex = new NumeroComplexo_1.NumeroComplexo();
    var result = new NumeroComplexo_1.NumeroComplexo();
    var opt = 1;
    while (opt != 0) {
        console.clear();
        switch ((opt = Number(reader.question(message)))) {
            case 0: break;
            case 1:
                console.log(complex.a);
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 2:
                console.log(complex.b);
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 3:
                complex.a = reader.questionInt("Valor: ");
                break;
            case 4:
                complex.b = reader.questionInt("Valor: ");
                break;
            case 9:
            case 5: {
                var other = new NumeroComplexo_1.NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
                result = complex.somar(other);
                console.log(result.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 10:
            case 6: {
                var other = new NumeroComplexo_1.NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
                result = complex.subtrair(other);
                console.log(result.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 11:
            case 7: {
                var other = new NumeroComplexo_1.NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
                result = complex.multiplicar(other);
                console.log(result.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 12:
            case 8: {
                var other = new NumeroComplexo_1.NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
                result = complex.dividir(other);
                console.log(result.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 13:
                console.log(complex.modulo());
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 14: {
                var other = new NumeroComplexo_1.NumeroComplexo(reader.questionInt("Valor real: "), reader.questionInt("Valor imaginário: "));
                console.log(complex.equals(other));
                reader.question("Pressione a tecla enter para continuar");
                break;
            }
            case 15:
                console.log(complex.toString());
                reader.question("Pressione a tecla enter para continuar");
                break;
            case 69:
                console.log(JSON.stringify(complex));
                reader.question("Pressione a tecla enter para continuar");
        }
        // Um truque para evitar ter que escrever mais código
        if (opt >= 9 && opt <= 12)
            complex = result;
    }
}
exports.menuNumeroComplexo = menuNumeroComplexo;
