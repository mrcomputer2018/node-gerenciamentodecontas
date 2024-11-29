const teclado = require('prompt-sync')();
import ContaBancaria from './ContaBancaria';
import ContaCorrente from './ContaCorrente';

export default class GerenciamentoDeContas {

    static menu(): void {
        console.log("\n+============= Menu de Opções =============+")
        console.log("| 1   - Criar conta corrente                |")
        console.log("| 1.1 - Listar contas                       |")
        console.log("| 2 - Criar conta Poupança                  |")
        console.log("| 3 - Criar conta Empresarial               |")
        console.log("| 4 - Realizar transferência                |")
        console.log("| 5 - Realizar saque                        |")
        console.log("| 6 - Realizar depósito                     |")
        console.log("| 7 - Consultar saldo disponível            |")
        console.log("| 9 - Sair                                  |")
        console.log("+========================+==================+")
    }

    static main(): void {

        const ListaDeContas: ContaBancaria[] = [];

        console.log("\n============ Bem-vindo ao Banco ============")

        while (true) {
            this.menu();

            const opcao = teclado("\nEscolha uma opção: ");

            switch (opcao) {
                case "1":
                    console.log("\n============ Criar conta corrente ============")
                    const titular: string = teclado("Digite o nome do titular: ");
                    const agencia: string = Math.floor(Math.random() * 1000).toString();
                    const numeroConta: string = Math.floor(Math.random() * 100000).toString();

                    const newContaCorrente: ContaBancaria = new ContaCorrente(titular, agencia, numeroConta, 1000, 0.05, 0);
                    ListaDeContas.push(newContaCorrente);

                    newContaCorrente.depositar(1000);
                    newContaCorrente.sacar(500);
                    newContaCorrente.calcularSaldoDisponivel();

                    console.log(`\nConta corrente criada com sucesso!`);
                    break;
                case "2":
                    console.log("\n============ Criar conta Poupança ============")
                    break;
                case "3":
                    console.log("\n============ Criar conta Empresarial ============")
                    break;
                case "4":
                    console.log("\n============ Realizar transferência ============")
                    break;
                case "5":
                    console.log("\n============ Realizar saque ============")
                    break;
                case "6":
                    console.log("\n============ Realizar depósito ============")
                    break;
                case "7":
                    console.log("\n============ Consultar saldo disponível ============")
                    break;
                case "9":
                    process.exit();
                case "11":
                    console.log("\n============ Listar Contas ============")
                    ListaDeContas.forEach(conta => {
                        console.log(`\nTitular: ${conta.getTitular()}`);
                        console.log(`Agência: ${conta.getAgencia()}`);
                        console.log(`Número da Conta: ${conta.getNumeroConta()}`);
                        console.log(`Saldo: ${conta.getSaldo()}`);
                        console.log(`Limite: ${conta.getLimite()}`);
                        console.log(`Taxa: ${conta.getTaxa()}`);
                    });
                    break;
                default:
                    console.log("\nOpção inválida");
                    break;
            }

        }
    }
}