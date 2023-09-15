const {Cliente} = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");

describe("Teste da classe Cliente", () => {

  const cliente = new Cliente;
  const plano = new Plano;
  
  beforeEach(() => {
    const cliente1 = new Cliente("Carolina Maria de Jesus", 90888377088, plano);
    const cliente2 = new Cliente("Maria Firmina dos Reis", 92730962042, plano);
    const cliente3 = new Cliente("Conceição Evaristo", 14888355002, plano);
    const cliente4 = new Cliente("Paulina Chiziane", 89110034099, plano);
    const cliente5 = new Cliente("Alice Walker", 22019249022, plano);
    const cliente6 = new Cliente("Chimamanda Ngozi Adichie", 22019249022, plano);
    const cliente7 = new Cliente("Sueli Carneiro", 51061356000, plano);
    const cliente8 = new Cliente("Ana Maria Gonçalves", 10798782030, plano);
  });

  it("Verifica se cliente está instaciado corretamente", () => {
    const cliente = new Cliente;
    expect(cliente).toBeInstanceOf(Cliente);
  });

  it("Verifica se os dados cadastrados da cliente são válidos", () => {
    expect(cliente.registerClient("Alice Walker", 22019249022, plano))
    .toBe("Cliente cadastrada com sucesso");
  });

  it("Verifica se a cliente é cadastrada com dados inválidos", () => {
    expect(() => cliente.registerClient("Carolina Maria de Jesus", 90888377088, 'sem plano'))
    .toThrow("Erro no cadastro, dados inválidos");
  });
    
});