const { Plano } = require("../spa-exaustinhas/Plano.js");

class PlanoEmpoderada extends Plano {
  constructor(cliente, nome, renda){
  super(cliente, renda);
  this.cliente = cliente;
  this.nome = nome;
  this.renda = renda;
  }

  criarPlano() {
    super.criarPlano;
    if(!(this.renda <= 29999 && this.renda > 3100)) {
      return console.log(`${this.nome} sua renda não é compatível com este plano`);
    }else {
      console.log(`${this.nome} Plano criado com sucesso`);
    }
  }

}



module.exports = { PlanoEmpoderada };