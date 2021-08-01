 class Cliente {

    private _nome: string;
    private _cpf: number;
    private _conta : Conta;
    constructor(nome: string, cpf: number, conta : Conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nome() {
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }

    toString(): string {
        return `Nome: ${this._nome} - Cpf: ${this._cpf} - Número da Conta: ${this._conta.numero} - Saldo: ${this._conta.saldo}`;
    }
}
