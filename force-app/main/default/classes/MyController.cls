public with sharing class MyController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String searchTerm) {
        String searchKey =  searchTerm + '%';
        return [SELECT Id, Name, Industry, Type FROM Account WHERE Name LIKE :searchKey LIMIT 10];
    }
}