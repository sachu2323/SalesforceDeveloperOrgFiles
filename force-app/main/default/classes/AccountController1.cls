public with sharing class AccountController1 {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, Industry, Rating FROM Account LIMIT 10];
    }
}