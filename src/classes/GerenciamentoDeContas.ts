const teclado = require('prompt-sync')();
export default class GerenciamentoDeContas {

    static menu(): void {
        console.log("\n+============= Menu de Opções =============+")
        console.log("| 1 - Criar conta corrente                  |")
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
        console.log("\n============ Bem-vindo ao Banco ============")
        this.menu();

        const opcao = teclado("\nEscolha uma opção: ");

        switch (opcao) {
            case "1":
                console.log("\n============ Criar conta corrente ============")
                
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
                console.log("\n============ Saindo do sistema ============")
                break;
            default:
                console.log("\nOpção inválida");
                break;
        }

        process.exit();
    }
}