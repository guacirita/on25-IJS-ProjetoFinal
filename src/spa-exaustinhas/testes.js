const {Cliente} = require("../spa-exaustinhas/Cliente.js");
const { Plano } = require("../spa-exaustinhas/Plano.js");
const { PlanoSororidade } = require("./PlanoSororidade.js");
const { PlanoEmpoderada } = require("./PlanoEmpoderada.js");
const { PlanoCamaradinha} = require("./PlanoCamaradinha.js");

const cliente = new Cliente;
const plano = new Plano;

const cliente1 = new Cliente("Carolina Maria de Jesus", 90888377088, plano);
const cliente2 = new Cliente("Maria Firmina dos Reis", 92730962042, plano);
const cliente3 = new Cliente("Conceição Evaristo", 14888355002, plano);
const cliente4 = new Cliente("Paulina Chiziane", 89110034099, plano);
const cliente5 = new Cliente("Alice Walker", 22019249022, plano);
const cliente6 = new Cliente("Chimamanda Ngozi Adichie", 22019249022, plano);
const cliente7 = new Cliente("Sueli Carneiro", 51061356000, plano);
const cliente8 = new Cliente("Ana Maria Gonçalves", 10798782030, plano);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);
console.log(cliente4);
console.log(cliente5);
console.log(cliente6);
console.log(cliente7);
console.log(cliente8);




const plano1 = new Plano("cliente1", "Carolina Maria de Jesus", 3000);
const plano2 = new Plano("cliente2", "Maria Firmina dos Reis", 3000);
const plano3 = new Plano("cliente3", "Conceição Evaristo", 15000);
const plano4 = new Plano("cliente4","Paulina Chiziane", 25000);
const plano5 = new Plano("cliente5", "Alice Walker", 50000);
const plano6 = new Plano("cliente6", "Chimamanda Ngozi Adichie", 30000);
const plano7 = new Plano("cliente7", "Sueli Carneiro", 25000);
const plano8 = new Plano("cliente8", "Ana Maria Gonçalves", 35000);



console.log(plano1);
console.log(plano2);
console.log(plano3);
console.log(plano4);
console.log(plano5);
console.log(plano6);
console.log(plano7);
console.log(plano8);




const planoSororidade1 = new PlanoSororidade("cliente5", "Alice Walker", 50000);
planoSororidade1.criarPlano();
console.log(planoSororidade1);


const planoSororidade2 = new PlanoSororidade("cliente6", "Chimamanda Ngozi Adichie", 30000);
planoSororidade2.criarPlano();
console.log(planoSororidade2);

const planoSororidade3 = new PlanoSororidade("cliente8", "Ana Maria Gonçalves", 35000);
planoSororidade3.criarPlano();
console.log(planoSororidade3);

const planoEmpoderada1 = new PlanoEmpoderada("cliente3", "Conceição Evaristo", 15000);
planoEmpoderada1.criarPlano();
console.log(planoEmpoderada1);

const planoEmpoderada2 = new PlanoEmpoderada("cliente4","Paulina Chiziane", 25000);
planoEmpoderada2.criarPlano();
console.log(planoEmpoderada2);

const planoEmpoderada3 = new PlanoEmpoderada("cliente7", "Sueli Carneiro", 25000);
planoEmpoderada3.criarPlano();
console.log(planoEmpoderada3);

const planoCamaradinha1 = new PlanoCamaradinha("cliente1", "Carolina Maria de Jesus", 3000);
planoCamaradinha1.criarPlano();
console.log(planoCamaradinha1);

const planoCamaradinha2 = new PlanoCamaradinha("cliente2", "Maria Firmina dos Reis", 3000);
planoCamaradinha2.criarPlano();
console.log(planoCamaradinha2);



console.log(PlanoCamaradinha);

console.log(planoCamaradinha1.renda);