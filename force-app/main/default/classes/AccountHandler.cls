public class AccountHandler {
    public static void insertAccount(Integer numacc)
    {
       List<Account> addAccounts = new List<Account>();
       Integer i = 1;
        while(i<numacc)
        {
          Account acct = new Account();
          acct.Name = 'Acme Inc ' + i;
          acct.AccountNumber = 'A000' + i;
          addAccounts.add(acct);
          i++;
          insert acct;
        }
        
    }
}