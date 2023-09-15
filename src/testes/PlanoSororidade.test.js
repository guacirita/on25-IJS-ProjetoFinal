const { PlanoSororidade } = require("../spa-exaustinhas/PlanoSororidade.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");
const {Cliente} = require("../spa-exaustinhas/Cliente.js");

jest.spyOn(console, 'log').mockImplementation();

describe("Teste da classe Plano Sororidade", () => {
  const cliente = new Cliente;
  const plano = new Plano;
  const planoSororidade = new PlanoSororidade;
  beforeEach(() => {

    const planoSororidade1 = new PlanoSororidade("cliente5", "Alice Walker", 50000);
    const planoSororidade2 = new PlanoSororidade("cliente6", "Chimamanda Ngozi Adichie", 30000);
    const planoSororidade3 = new PlanoSororidade("cliente8", "Ana Maria Gonçalves", 35000);
  });

  describe("criarPlano()", () => {

    it("Verifica se plano está instaciado corretamente", () => {
     
      expect(planoSororidade).toBeInstanceOf(PlanoSororidade);
    });

    it("Verificar se o método criar plano o objeto retorna falso ", () => {
      expect(!(cliente instanceof Cliente)).toBe(false);
      expect(!(plano instanceof Plano)).toBe(false);
    });

    it("Verificar se o método criar plano o objeto retorna verdadeiro ", () => {
      expect(cliente instanceof Cliente).toBe(true);
      expect(plano instanceof Plano).toBe(true);
    });
    
    it('cria um plano com sucesso se a renda for maior ou igual a 30000', () => {
      const planoSororidade1 = new PlanoSororidade("cliente5", "Alice Walker", 50000);
      planoSororidade1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoSororidade1.nome} Plano criado com sucesso`);
    });

    it('não cria um plano se a renda for menor que 30000', () => {
      const planoSororidade1 = new PlanoSororidade("cliente5", "Alice Walker", 4000);
      planoSororidade1.criarPlano();

      expect(console.log)
        .toHaveBeenCalledWith(`${planoSororidade1.nome} sua renda não é compatível com este plano`);
    });

  });

});






