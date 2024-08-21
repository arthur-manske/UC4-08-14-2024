"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
/* Um contador abstrato */
var Contador = /** @class */ (function () {
    /* Construtor, o contador é iniciado vazio */
    function Contador() {
        /* Guardar de forma privada o valor contido no contador */
        this.value = 0;
    }
    /* Zera os valores */
    Contador.prototype.zerar = function () { this.value = 0; };
    /* Incrementa o contador */
    Contador.prototype.incrementar = function () { this.value++; };
    /* Retorna o valor contido no contador */
    Contador.prototype.valor = function () { return this.value; };
    return Contador;
}());
exports.Contador = Contador;
;
