
const { Plano } = require("../spa-exaustinhas/Plano.js");

class PlanoCamaradinha extends Plano {


  constructor(cliente, nome, renda) {
    super(cliente, renda);
    this.cliente = cliente;
    this.nome = nome;
    this.renda = renda;

    this.totalHorasEconomizadas = 0;

  }

  criarPlano() {
    super.criarPlano;
    if (this.renda <= 3000) {
      console.log(`${this.nome} Plano criado com sucesso`);
    } else {
      console.log(`${this.nome} sua renda não é compatível com este plano`);
    }
  }

  delegarTarefasDomesticas() {
    let qtdeHoras = 1;
    this.totalHorasEconomizadas += qtdeHoras;

    console.log(`${this.nome} você economizou ${qtdeHoras} horas`);
  }


  receberApoioTarefas() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }
  }

  dormir() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} está dormindo`);
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }

  }

  fazerExercicios() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} está fazendo exercícios`);
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }

  }

  ler() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} está lendo`);
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }

  }

  cuidarDaAutoestima() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} está cuidando da autoestima`);
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }
  }

  estudar() {
    if (this.totalHorasEconomizadas >= 2) {
      let qtdeHoras = 1;
      this.totalHorasEconomizadas -= qtdeHoras;
      console.log(`${this.nome} está estudando`);
      console.log(`${this.nome} você gastou ${qtdeHoras} horas`);
    } else {
      console.log(`${this.nome} você não tem horas suficiente`);
    }
  }

}




module.exports = { PlanoCamaradinha };











