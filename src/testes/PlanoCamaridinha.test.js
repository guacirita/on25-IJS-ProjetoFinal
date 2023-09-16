const { PlanoCamaradinha } = require("../spa-exaustinhas/PlanoCamaradinha.js");
const { Cliente } = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");

jest.spyOn(console, 'log').mockImplementation();

describe("Teste da classe Plano Camaradinha", () => {
  const cliente = new Cliente;
  const plano = new Plano;
  const planoCamaradinha = new PlanoCamaradinha;

  beforeEach(() => {
    const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
    const planoCamaradinha2 = new PlanoCamaradinha("cliente2", "Maria Firmina dos Reis", 3000);
  });

  it("Verifica se o método criar plano camaradinha é executado corretamente", () => {
    const planoCamaradinha = new PlanoCamaradinha;
    expect(planoCamaradinha).toBeInstanceOf(PlanoCamaradinha);
  });


  describe("criarPlano()", () => {
    it('cria um plano com sucesso se a renda for menor ou igual a 3000', () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} Plano criado com sucesso`);
    });

    it('não cria um plano se a renda for maior que 3000', () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 4000);
      planoCamaradinha1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} sua renda não é compatível com este plano`);
    });

    it("deve delegar tarefas domésticas e economizar horas", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(2);
    });

    it("deve diminuir a quantidade horas ao chamar o método delegar tarefas", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.receberApoioTarefas();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);

    });

    it("deve receber mensagem de erro por falta de horas no metodo receber apoio as tarefas", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.receberApoioTarefas();
      expect(console.log)
      .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
  });
    

    it("deve diminuir a quantidade horas ao chamar o método dormir", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.dormir();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);
    });

    it("deve retornar erro devido a quantidade horas ao chamar o método dormir", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.dormir();
      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
    });


    it("deve diminuir a quantidade horas ao chamar o método fazer Exercicios", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.fazerExercicios();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);
    });

    it("deve retornar erro devido a quantidade horas ao chamar o método  fazer exercícios", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.fazerExercicios();
      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
    });

    it("deve diminuir a quantidade horas ao chamar o método ler", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.ler();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);
    });

    it("deve retornar erro devido a quantidade horas ao chamar o método ler", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.ler();
      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
    });

    it("deve diminuir a quantidade horas ao chamar o método cuidar da Autoestima", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.cuidarDaAutoestima();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);

    });

    it("deve retornar erro devido a quantidade horas ao chamar o método cuidar da Autoestima", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.cuidarDaAutoestima();
      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
    });

    it("deve diminuir a quantidade horas ao chamar o método  estudar", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.delegarTarefasDomesticas();
      planoCamaradinha1.estudar();
      expect(planoCamaradinha1.totalHorasEconomizadas).toBe(1);
    });

    it("deve retornar erro devido a quantidade horas ao chamar o método  estudar", () => {
      const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
      planoCamaradinha1.estudar();
      expect(console.log)
        .toHaveBeenCalledWith(`${planoCamaradinha1.nome} você não tem horas suficiente`);
    });


  });
});




















































