public class CreateAccountScheduler implements Schedulable {
    public void execute(SchedulableContext context) {

// Create the account sObject 
Account acct = new Account(Name='Acme', Phone='(415)555-1212', NumberOfEmployees=100);
// Insert the account by using DML
insert acct;
}
}