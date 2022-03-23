public class Conta {

    @AuraEnabled
    public static Account criarConta(String name) {
        
        Account conta = new Account();

        conta.Name = name;
        
        insert conta;
        
        return conta;
    }

}