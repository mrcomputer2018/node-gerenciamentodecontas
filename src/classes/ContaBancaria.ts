import { randomUUID } from "crypto";

export default abstract class ContaBancaria {
    private readonly id: string;
    private readonly titular: string;
    private agencia: string;
    protected readonly numeroConta: string;
    protected saldo: number;
   

    constructor(titular: string, agencia: string, numeroConta: string, saldo: number = 0) {
        this.id = randomUUID();
        this.titular= titular;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    //metodos
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} na conta ${this.numeroConta} realizado com sucesso`);
    }

    sacar(valor: number): void {

        let saldo = this.saldo - valor

        if (saldo < 0) {
            console.log('Saldo insuficiente');
            return
        }

        this.saldo = this.saldo - valor;
        console.log('Saque realizado com sucesso');
    }

    abstract transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void;

    abstract  calcularSaldoDisponivel(): number;
}