class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalhes() {
        return `Veículo: ${this.marca} ${this.modelo}`;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, portas) {
        super(marca, modelo);
        this.portas = portas;
    }

    detalhes() {
        return `${super.detalhes()} com ${this.portas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    detalhes() {
        return `${super.detalhes()} do tipo ${this.tipo}`;
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 4);
const carro2 = new Carro('Honda', 'Civic', 2);
const moto1 = new Moto('Yamaha', 'MT-07', 'naked');

console.log(carro1.detalhes());
console.log(carro2.detalhes());
console.log(moto1.detalhes());
