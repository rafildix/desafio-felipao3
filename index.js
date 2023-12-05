class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        let mensagem = `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

let heroiMago = new Heroi("Felipão", 100, "mago");
heroiMago.atacar();

let heroiGuerreiro = new Heroi("Rafael", 70, "guerreiro");
heroiGuerreiro.atacar();

let heroiMonge = new Heroi("Diogo", 30, "monge");
heroiMonge.atacar();

let heroiNinja = new Heroi("Gabriel", 45, "ninja");
heroiNinja.atacar();