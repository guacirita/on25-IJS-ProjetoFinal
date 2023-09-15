const { Cliente } = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");
const { PlanoEmpoderada } = require("../spa-exaustinhas/PlanoEmpoderada.js");

jest.spyOn(console, 'log').mockImplementation();


describe("Teste da classe Plano Empoderada", () => {
  const cliente = new Cliente;
  const plano = new Plano;
  const planoEmpoderada = new PlanoEmpoderada;
  beforeEach(() => {

    const planoEmpoderada1 = new PlanoEmpoderada("cliente3", "Conceição Evaristo", 15000);
    const planoEmpoderada2 = new PlanoEmpoderada("cliente4", "Paulina Chiziane", 25000);
    const planoEmpoderada3 = new PlanoEmpoderada("cliente7", "Sueli Carneiro", 25000);
  });

  describe("criarPlano()", () => {

    it("Verifica se plano está instaciado corretamente", () => {

      expect(planoEmpoderada).toBeInstanceOf(PlanoEmpoderada);
    });

    it("Verificar se o método criar plano o objeto retorna falso ", () => {
      expect(!(cliente instanceof Cliente)).toBe(false);
      expect(!(plano instanceof Plano)).toBe(false);
    });

    it("Verificar se o método criar plano o objeto retorna verdadeiro ", () => {
      expect(cliente instanceof Cliente).toBe(true);
      expect(plano instanceof Plano).toBe(true);
    });

    it('cria um plano com sucesso se a renda for menor ou igual a 29999', () => {
      const planoEmpoderada1 = new PlanoEmpoderada("cliente3", "Conceição Evaristo", 15000);
      planoEmpoderada1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoEmpoderada1.nome} Plano criado com sucesso`);
    });

    it('não cria um plano se a renda for menor que 3100', () => {
      const planoEmpoderada1 = new PlanoEmpoderada("cliente3", "Conceição Evaristo", 1500);
      planoEmpoderada1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoEmpoderada1.nome} sua renda não é compatível com este plano`);
    });

  });

});






