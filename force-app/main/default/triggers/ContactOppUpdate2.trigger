trigger ContactOppUpdate2 on Contact (after update) {
    // Get the IDs of all updated Contacts
    Set<Id> updatedContactIds = new Set<Id>();
    for (Contact c : Trigger.new) {
        if (Trigger.oldMap.get(c.Id).Email != c.Email) { // Only process Contacts where the email has changed
            updatedContactIds.add(c.Id);
        }
    }
    
    // Query for all Opportunities related to the updated Contacts
    List<Opportunity> opportunitiesToUpdate = [SELECT Id, Contact__c, Contact__r.Email FROM Opportunity WHERE Contact__c IN :updatedContactIds];
    
    // Update the email field on each related Opportunity record
    for (Opportunity o : opportunitiesToUpdate) {
        o.Email_Address__c = o.Contact__r.Email;
    }
    
    // Save the updated Opportunity records
    update opportunitiesToUpdate;

}