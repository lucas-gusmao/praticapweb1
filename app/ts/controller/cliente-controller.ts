
class ClienteController {

    private _inputNumero: HTMLInputElement;
    private _inputSaldo: HTMLInputElement;
    private _inputNome: HTMLInputElement;
    private _inputCpf: HTMLInputElement;

    private _contas: Contas;
    private _clientes : Clientes;

    constructor() {
        this._inputNumero =
            <HTMLInputElement>document.querySelector("#conta");
        this._inputSaldo =
            <HTMLInputElement>document.querySelector("#saldo");
        this._inputNome=
            <HTMLInputElement>document.querySelector("#nome");
        this._inputCpf=
            <HTMLInputElement>document.querySelector("#cpf");
        this._contas = new Contas();
        this._clientes = new Clientes();
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let novaConta = new Conta(this._inputNumero.value, parseFloat(this._inputSaldo.value))
        let novoCliente = new Cliente(this._inputNome.value, parseInt(this._inputCpf.value), novaConta)
        this._clientes.inserir(novoCliente)
        this._contas.inserir(novaConta)
        this.inserirClienteNoHTML(novoCliente)
    }
    pesquisar(evento : Event){
        evento.preventDefault();
        if (this._clientes.pesquisar(parseInt(this._inputCpf.value)) == undefined){
            alert("Cliente não cadastrado");
        }
        else{
            let resultado = this._clientes.pesquisar(parseInt(this._inputCpf.value))
            alert(`Cliente : ${resultado.nome}`);
        }
    }

    listar() {
        this._clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }
    

    inserirClienteNoHTML(cliente: Cliente) {
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                this._clientes.remover(cliente.cpf); 
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

}
