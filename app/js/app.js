let clienteController = new ClienteController();
const cl = new Clientes();
const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
cl.inserir(new Cliente('joão', 1545, c1));
cl.inserir(new Cliente('joseph', 1546, c2));
console.log(cl.pesquisar(1545));
console.log(cl.pesquisar(1546));
cl.remover(1545);
let lista = cl.listar();
for (let i in lista) {
    console.log(lista[i.toString()]);
}
cl.remover(1546);
