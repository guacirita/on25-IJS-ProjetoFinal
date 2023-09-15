// const { Cliente } = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");

class PlanoSororidade extends Plano {
  nome;
  constructor(cliente, nome, renda) {
    super(cliente, renda);
    this.cliente = cliente;
    this.nome = nome;
    this.renda = renda;

  }

  criarPlano() {
    super.criarPlano;
    if (this.renda >= 30000) {
      console.log(`${this.nome} Plano criado com sucesso`);
    } else {
      console.log(`${this.nome} sua renda não é compatível com este plano`);
    }
  }
}


module.exports = { PlanoSororidade };