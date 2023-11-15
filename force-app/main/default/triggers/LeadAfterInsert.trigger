trigger LeadAfterInsert on Lead (before insert) {
		for (Lead record : Trigger.new) {
        System.debug('Inserted Lead Record - Field1: ' + record.Id);
        System.debug('Inserted Lead Record - Field1: ' + record.FirstName);
    }
}