import ContaBancaria from "./ContaBancaria";

export default class ContaCorrente extends ContaBancaria {
    private readonly limite: number;
    private readonly taxa: number;
    
    constructor(titular: string, agencia: string, numeroConta: string, saldo: number = 0, limite: number, taxa: number) {
        super(titular, agencia, numeroConta, saldo);
        this.limite = limite;
        this.taxa = taxa;
    }

    //metodos
    sacar(valor: number): void {
        let saldo = this.saldo + this.limite - valor;

        if (saldo < 0) {
            console.log('Saldo insuficiente');
            return
        }

        this.saldo = this.saldo - valor;
        console.log(`Saque de R$${valor} na conta ${this.numeroConta} realizado com sucesso`);
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} na conta ${this.numeroConta} realizado com sucesso`);
    }

    transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void {
        console.log("\n============ Transferência ============")
       /*  console.log(`\nTransferindo R$${valor} da conta ${contaOrigem.numeroConta} para a conta ${contaDestino.numeroConta}`); */
    }

    calcularSaldoDisponivel(): number {
        const saldoDisponivel = this.saldo + this.limite - (this.saldo * this.taxa);
        console.log("\n============ Saldo Disponivel ============")
        console.log("\nTaxa  de utilizaçaõa do chque especial: R$" + this.saldo * this.taxa);
        console.log(`\nSaldo disponível na conta ${this.numeroConta}: R$${saldoDisponivel}`);
        return saldoDisponivel;
    }
}