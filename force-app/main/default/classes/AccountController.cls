public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsByName(String accountName) {
        return [SELECT Id, Name FROM Account WHERE Name LIKE :accountName +'%'];
    }
}