const { Cliente } = require("../spa-exaustinhas/Cliente.js");

class Plano {
  ehAdm;
  cliente;
  nome;
  #renda;

  static allClientes = [];
  static allClientesPlanos = [];

  constructor(cliente, nome, renda) {
    this.cliente = cliente;
    this.nome = nome;
    this.#renda = renda;
    this.ehAdm = true;
    Plano.allClientes.push(this);
    Plano.allClientesPlanos.push(this);

  }

  criarPlano(cliente, plano) {
    if (!(cliente instanceof Cliente)) {
      return console.log("É preciso ser uma cliente para fazer um plano");
    } else if (!(plano instanceof Plano)) {
      return console.log("É preciso ser um plano válido");
    } else {
      return console.log("Conta criada com sucesso");
    }
  }

  get renda() {
    if (this.ehAdm) {
      return this.#renda;
    }
  }

  set renda(newRenda) {
    if (this.ehAdm) {
      this.#renda = newRenda;
    }
  }

  dormir() {
    console.log(`${this.nome} está dormindo`);
  }

  fazerExercicios() {
    console.log(`${this.nome} está fazendo exercícios`);
  }

  ler() {
    console.log(`${this.nome} está lendo`);
  }
  
  cuidarDaAutoestima() {
    console.log(`${this.nome} está cuidando da autoestima`);
  }

}


module.exports = { Plano };















