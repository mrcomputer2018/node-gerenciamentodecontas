import ContaBancaria from "./ContaBancaria";

export default class ConntaPoupanca extends ContaBancaria {
    private juros: number;

    constructor(
        titular: string, 
        agencia: string, 
        numeroConta: string, 
        limite: number, 
        taxa: number,  
        juros: number, 
        saldo?: number) 
        {
            super(titular, agencia, numeroConta, limite, taxa, saldo ?? 0);
            this.juros = juros;
        }

    //Metodos
    transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void {
        console.log('Conta Poupança');
    };

    calcularSaldoDisponivel(): number {
        return 0;
    }
}