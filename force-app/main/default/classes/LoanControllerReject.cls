public class LoanControllerReject {
	@AuraEnabled(cacheable=true)
 	public static Integer getRejectRecordCount() {
        Integer count = 0;
        List<AggregateResult> results = [SELECT COUNT(Id) total FROM Loan__c where Loan_Status__c = 'Rejected'];
        if (results.size() > 0) {
            count = Integer.valueOf(results[0].get('total'));
        }
        return count;
    }
}