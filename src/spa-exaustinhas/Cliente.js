const { Plano } = require("../spa-exaustinhas/Plano.js");

class Cliente {
  nome;
  #cpf;
  plano;

  static listaDeClientes = [];

  constructor(nome, cpf, plano) {
    this.nome = nome;
    this.#cpf = cpf;
    this.plano = plano;

    Cliente.listaDeClientes.push(this);
  }

  registerClient(nome, cpf, plano) {
    if (plano instanceof Plano) {
      this.nome = nome;
      this.#cpf = cpf;
      this.plano = plano;

      return "Cliente cadastrada com sucesso";
    } else {
      throw new Error("Erro no cadastro, dados inválidos");
    }
  }

}

module.exports = { Cliente };






