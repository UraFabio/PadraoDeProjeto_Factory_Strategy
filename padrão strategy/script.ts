interface Transporte{
    custo(): void
}

class Onibus implements Transporte{
    custo(): void{
        console.log("O custo total é de R$350,00")
    }
}

class Carro implements Transporte{
    custo(): void{
        console.log("O custo total é de R$460,00")
    }
}

class Taxi implements Transporte{
    custo(): void{
        console.log("O custo total é de R$696,00")
    }
}

class Passageiro{
    nome: string
    transporte: Transporte

    constructor(nome: string, transporte: Transporte){
        this.nome = nome
        this.transporte = transporte
    }

    mostrarCusto(): void{
        console.log(`O passageiro ${this.nome} decidiu: `)
        this.transporte.custo()
    }
}

const Daniel = new Passageiro("Daniel", new Taxi())

const AnaBeatriz = new Passageiro("Ana Beatriz", new Carro())

const Rafael = new Passageiro("Rafael", new Onibus())

Daniel.mostrarCusto()

AnaBeatriz.mostrarCusto()

Rafael.mostrarCusto()
