class ClienteEspecial extends Cliente {

    constructor(_nome : string, _cpf : number, _conta : Conta ,  private _dependentes: Array<Cliente>){
        super(_nome, _cpf, _conta);
        
    }
}