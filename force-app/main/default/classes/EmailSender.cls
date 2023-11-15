public class EmailSender {
    @AuraEnabled
    public static void sendEmail(String recipientEmail, String subject, String body) {
        List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new String[] { recipientEmail });
        email.setSubject(subject);
        email.setPlainTextBody(body);
        emails.add(email);
        Messaging.sendEmail(emails);
    }
}