export default abstract class ContaBancaria {
    private readonly numeroConta: string;
    private saldo: number;

    constructor(numeroConta: string, saldo: number = 0) {
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    //metodos
    depositar(valor: number): void {
        this.saldo += valor;
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

    abstract  calcularSaldoDisponivel(): number;
}