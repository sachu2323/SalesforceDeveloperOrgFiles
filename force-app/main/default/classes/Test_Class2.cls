public class Test_Class2 {
	@AuraEnabled
    public static List<Account> getAccounts()
    {
        return [Select Name, Type, Industry, Phone from Account];
    }
}