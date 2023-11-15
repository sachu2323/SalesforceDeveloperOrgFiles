public class LoanControllerCount {
    @AuraEnabled(cacheable=true)
    public static Integer getRecordCount() {
        Integer count = 0;
        List<AggregateResult> results = [SELECT COUNT(Id) total FROM Loan__c];
        if (results.size() > 0) {
            count = Integer.valueOf(results[0].get('total'));
        }
        return count;
    }
    
    @AuraEnabled(cacheable=true)
 	public static Integer getVPRecordCount() {
        Integer count = 0;
        List<AggregateResult> results = [SELECT COUNT(Id) total FROM Loan__c where Loan_Status__c = 'Values Pending'];
        if (results.size() > 0) {
            count = Integer.valueOf(results[0].get('total'));
        }
        return count;
    }

}