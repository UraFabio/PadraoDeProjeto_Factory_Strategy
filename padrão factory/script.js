class Desenvolvedor{
    constructor(nome, type ){
        this.nome = nome
        this.type = "Desenvolvedor"
        this.salario = 5500
    }
}

class Designer{
    constructor(nome, type){
        this.nome = nome
        this.type = "Designer"
        this.salario = 4500
    }
}

class Gerente{
    constructor(nome, type){
        this.nome = nome
        this.type = "Gerente"
        this.salario = 10000
    }
}

class Factory{
    criar(nome, type){        
        switch(type){
            case 1:
                return new Desenvolvedor(nome)
                break
            case 2:
                return new Designer(nome)
                break
            case 3:
                return new Gerente(nome)
                break
        }
    }
}

const factory = new Factory

console.log(factory.criar("Fabio", 1))
console.log(factory.criar("Rafael", 2))
console.log(factory.criar("Ana", 3))