"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ponto2D = void 0;
/* Representa uma posição em um plano cartesiano de duas dimensões */
var Ponto2D = /** @class */ (function () {
    /* Construtor real */
    function Ponto2D(x, y) {
        /* Representa de modo privado o eixo x da classe */
        this._x = 0;
        /* Representa de modo privado o eixo y da classe */
        this._y = 0;
        if (typeof (x) == "object") {
            var spec = x;
            this._x = spec.x;
            this._y = spec.y;
            return;
        }
        if (x && y) {
            this._x = x;
            this._y = y;
        }
    }
    Object.defineProperty(Ponto2D.prototype, "x", {
        /* Getter para o x */
        get: function () { return this._x; },
        /* Setter para o x */
        set: function (x) { this._x = x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ponto2D.prototype, "y", {
        /* Getter para o y */
        get: function () { return this._y; },
        /* Setter para o y */
        set: function (y) { this._y = y; },
        enumerable: false,
        configurable: true
    });
    /* Implementação da função que move o Ponto2D */
    Ponto2D.prototype.move = function (x, y) {
        if (typeof (x) === "object") {
            var spec = x;
            this._x = spec.x;
            this._y = spec.y;
            return;
        }
        if (x)
            this._x = x;
        if (y)
            this._y = y;
    };
    /* Checa igualdade entre dois Pontos2D */
    Ponto2D.prototype.equals = function (b) { return this.x === b.x && this.y === b.y; };
    /* Implementação do método toString para Ponto2D */
    Ponto2D.prototype.toString = function () { return "Ponto2D { .x = ".concat(this.x, ", .y = ").concat(this.y, " }"); };
    /* Distância entre dois Ponto2D */
    Ponto2D.prototype.distancia = function (b) { return Math.abs(this.x - b.x) + Math.abs(this.y - b.y); };
    /* Implementação do método clone para Ponto2D */
    Ponto2D.prototype.clone = function () { return new Ponto2D(this); };
    return Ponto2D;
}());
exports.Ponto2D = Ponto2D;
;
