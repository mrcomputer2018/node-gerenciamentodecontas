import ContaBancaria from "./ContaBancaria";


export default class ContaCorrente extends ContaBancaria {
    
    constructor(titular: string, agencia: string, numeroConta: string, limite: number, taxa: number, saldo?: number) {
        super(titular, agencia, numeroConta, limite, taxa,  saldo ?? 0);
    }

    //metodos
    sacar(valor: number): void {
        let saldo = ((this.saldo ?? 0) - valor) - valor * this.taxa;

        if (saldo < 0) {
            console.log('Saldo insuficiente');
            return
        }

        this.saldo = (this.saldo ?? 0) - valor;
        console.log(`Saque de R$${valor} na conta n.º${this.numeroConta} realizado com sucesso`);
    }

    depositar(valor: number): void {
        this.saldo = (this.saldo ?? 0) + valor;
        console.log(`Depósito de R$${valor} na conta n.º${this.numeroConta} realizado com sucesso`);
    }

    transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void {
        console.log("\n============ Transferência ============")
       /*  console.log(`\nTransferindo R$${valor} da conta ${contaOrigem.numeroConta} para a conta ${contaDestino.numeroConta}`); */
    }

    calcularSaldoDisponivel(): number {
        const saldoDisponivel = (this.saldo ?? 0) + this.limite - ((this.saldo ?? 0) * this.taxa);
        console.log("\N============ Saldo Disponivel ============")
        console.log("Taxa  de utilizaçaõa do chque especial: R$" + (this.saldo ?? 0) * this.taxa);
        console.log(`Valor disponível para uso na conta n.º${this.numeroConta}: R$${saldoDisponivel}`);
        return saldoDisponivel;
    }
}