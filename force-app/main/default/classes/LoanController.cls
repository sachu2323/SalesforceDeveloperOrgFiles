public with sharing class LoanController {
    @AuraEnabled(cacheable=true)
    public static List<Loan__c> getLoans(String searchTerm) {
        String searchKey =  searchTerm + '%';
        return [SELECT Id, Name, Loan_Amount__c, Loan_type__c FROM Loan__c WHERE Name LIKE :searchKey LIMIT 10];
    }
}