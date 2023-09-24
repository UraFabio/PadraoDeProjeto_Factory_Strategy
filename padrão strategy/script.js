var Onibus = /** @class */ (function () {
    function Onibus() {
    }
    Onibus.prototype.custo = function () {
        console.log("O custo total é de R$350,00");
    };
    return Onibus;
}());
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.custo = function () {
        console.log("O custo total é de R$460,00");
    };
    return Carro;
}());
var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.custo = function () {
        console.log("O custo total é de R$696,00");
    };
    return Taxi;
}());
var Passageiro = /** @class */ (function () {
    function Passageiro(nome, transporte) {
        this.nome = nome;
        this.transporte = transporte;
    }
    Passageiro.prototype.mostrarCusto = function () {
        console.log("O passageiro ".concat(this.nome, " decidiu: "));
        this.transporte.custo();
    };
    return Passageiro;
}());
var Daniel = new Passageiro("Daniel", new Taxi());
var AnaBeatriz = new Passageiro("Ana Beatriz", new Carro());
var Rafael = new Passageiro("Rafael", new Onibus());
Daniel.mostrarCusto();
AnaBeatriz.mostrarCusto();
Rafael.mostrarCusto();
