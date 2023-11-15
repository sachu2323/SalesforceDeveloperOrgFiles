public class MyScheduledClass implements Schedulable {
    public void execute(SchedulableContext sc) {
        System.debug('Cron job executed successfully!');
        Account newAccount = new Account();
        newAccount.Name = 'Test AccountCronJOB';
        // Set other fields as needed
        insert newAccount;
        System.debug('Test Account created: ' + newAccount.Id);
    }
}