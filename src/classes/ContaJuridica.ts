import ContaBancaria from './ContaBancaria';

export default class ContaJuridica extends ContaBancaria {
    private cnpj: string;

    constructor(titular: string, agencia: string, numeroConta: string, saldo: number, cnpj: string, limite: number, taxa: number) {
        super(titular, agencia, numeroConta, limite, taxa, saldo ?? 0);
        this.cnpj = cnpj;
    }

    //Metodos
    transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void {
        console.log('Conta Juridica');
    }

    calcularSaldoDisponivel(): number {
        return 0;
    }
}
