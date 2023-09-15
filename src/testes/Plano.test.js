const { Cliente } = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");


describe("Teste da classe Plano", () => {

  const plano = new Plano;
  const cliente = new Cliente;

  beforeEach(() => {

    const cliente1 = new Cliente("Carolina Maria de Jesus", 90888377088, plano);
    const cliente2 = new Cliente("Maria Firmina dos Reis", 92730962042, plano);
    const cliente3 = new Cliente("Conceição Evaristo", 14888355002, plano);
    const cliente4 = new Cliente("Paulina Chiziane", 89110034099, plano);
    const cliente5 = new Cliente("Alice Walker", 22019249022, plano);
    const cliente6 = new Cliente("Chimamanda Ngozi Adichie", 22019249022, plano);
    const cliente7 = new Cliente("Sueli Carneiro", 51061356000, plano);
    const cliente8 = new Cliente("Ana Maria Gonçalves", 10798782030, plano);

    const plano1 = new Plano("cliente1", "Carolina Maria de Jesus", 3000);
    const plano2 = new Plano("cliente2", "Maria Firmina dos Reis", 6000);
    const plano3 = new Plano("cliente3", "Conceição Evaristo", 15000);
    const plano4 = new Plano("cliente4", "Paulina Chiziane", 25000);
    const plano5 = new Plano("cliente5", "Alice Walker", 50000);
    const plano6 = new Plano("cliente6", "Chimamanda Ngozi Adichie", 30000);
    const plano7 = new Plano("cliente7", "Sueli Carneiro", 25000);
    const plano8 = new Plano("cliente8", "Ana Maria Gonçalves", 35000);

  });

  it("Verifica se plano está instaciado corretamente", () => {
    const plano = new Plano;
    expect(plano).toBeInstanceOf(Plano);
  });

  it("Verificar se o método criar plano o objeto retorna falso ", () => {
    expect(!(cliente instanceof Cliente)).toBe(false);
    expect(!(plano instanceof Plano)).toBe(false);
  });

  it("Verificar se o método criar plano o objeto retorna verdadeiro ", () => {
    expect(cliente instanceof Cliente).toBe(true);
    expect(plano instanceof Plano).toBe(true);
  });


});






