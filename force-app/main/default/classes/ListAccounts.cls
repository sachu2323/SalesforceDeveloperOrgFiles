public class ListAccounts {
    public static void executeQuery() {
        List<Account> accts = [SELECT Name, Phone FROM Account];
        for(Account a : accts) {
            System.debug('Account Name: ' + a.Name + ', Phone: ' + a.Phone);
        }
    }
}