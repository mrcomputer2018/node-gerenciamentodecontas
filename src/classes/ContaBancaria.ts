import { randomUUID } from "crypto";
import { IContas } from "../interfaces/IContas";

export default abstract class ContaBancaria{
    protected readonly id: string;
    protected readonly titular: string;
    protected agencia: string;
    protected readonly numeroConta: string;
    protected saldo: number;
    protected limite: number;
    protected taxa: number;
   

    constructor(titular: string, agencia: string, numeroConta: string, limite: number, taxa: number, saldo?: number) {
        this.id = randomUUID();
        this.titular= titular;
        this.agencia = agencia;
        this.numeroConta = numeroConta;
        this.limite = limite;
        this.taxa = taxa;
        this.saldo = 0;
    }

    //getters
    getTitular(): string {
        return this.titular;
    }
    
    getAgencia(): string {
        return this.agencia;
    }
    
    getNumeroConta(): string {
        return this.numeroConta;
    }
    
    getSaldo(): number | undefined {
        return this.saldo;
    }

    getLimite(): number {
        return this.limite;
    }

    getTaxa(): number {
        return this.taxa;
    }

    //setters
    setSaldo(saldo: number): void {   
        this.saldo = saldo;
    }

    //metodos
    depositar(valor: number): void {
        this.saldo ? this.saldo += valor : 0
        console.log(`Depósito de R$${valor} na conta ${this.numeroConta} realizado com sucesso`);
    }

    sacar(valor: number): void {

        let saldo = (this.saldo ? this.saldo : 0) - valor

        if (saldo < 0) {
            console.log('Saldo insuficiente');
            return
        }

        this.saldo = (this.saldo ? this.saldo : 0) - valor;
        console.log('Saque realizado com sucesso');
    }

    abstract transferencia(contaOrigem: ContaBancaria, contaDestino: ContaBancaria, valor: number): void;

    abstract  calcularSaldoDisponivel(): number;
}