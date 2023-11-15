public class LoanControllerApprove {
	    
    @AuraEnabled(cacheable=true)
 	public static Integer getApproveRecordCount() {
        Integer count = 0;
        List<AggregateResult> results = [SELECT COUNT(Id) total FROM Loan__c where Loan_Status__c = 'Approved'];
        if (results.size() > 0) {
            count = Integer.valueOf(results[0].get('total'));
        }
        return count;
    }
}