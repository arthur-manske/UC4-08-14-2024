"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumeroComplexo = void 0;
var NumeroComplexo = /** @class */ (function () {
    /* Construtor inferido */
    function NumeroComplexo(real, imaginary) {
        if (real === void 0) { real = 0; }
        if (imaginary === void 0) { imaginary = 0; }
        this.real = real;
        this.imaginary = imaginary;
    }
    Object.defineProperty(NumeroComplexo.prototype, "a", {
        /* Getter para real */
        get: function () { return this.real; },
        /* Setter para real */
        set: function (a) { this.real = a; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NumeroComplexo.prototype, "b", {
        /* Getter para imaginary */
        get: function () { return this.imaginary; },
        /* Setter para imaginary */
        set: function (b) { this.imaginary = b; },
        enumerable: false,
        configurable: true
    });
    NumeroComplexo.prototype.somar = function (b) {
        return new NumeroComplexo(this.real + b.a, this.imaginary + b.b);
    };
    NumeroComplexo.prototype.subtrair = function (b) {
        return new NumeroComplexo(this.real - b.a, this.imaginary - b.b);
    };
    NumeroComplexo.prototype.multiplicar = function (b) {
        return new NumeroComplexo(this.real * b.a - this.imaginary * b.b, this.real * b.b + this.imaginary * b.a);
    };
    NumeroComplexo.prototype.dividir = function (b) {
        var denominator = (b.a * b.a) + (b.b * b.b);
        return new NumeroComplexo((this.real * b.a + this.imaginary * b.b) / denominator, (this.imaginary * b.a - this.real * b.b) / denominator);
    };
    NumeroComplexo.prototype.equals = function (b) { return this.real === b.a && this.imaginary === b.b; };
    NumeroComplexo.prototype.toString = function () { return "".concat(this.real, " + ").concat(this.imaginary, "i"); };
    NumeroComplexo.prototype.modulo = function () {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    };
    return NumeroComplexo;
}());
exports.NumeroComplexo = NumeroComplexo;
;
