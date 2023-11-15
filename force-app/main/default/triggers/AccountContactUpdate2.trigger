trigger AccountContactUpdate2 on Account (after update) {
	// Id record=Schema.SObjectType.Object__c.RecordTypeInfosByName.get('Student').RecordTypeId;
    
    if(Trigger.isAfter && trigger.isUpdate) {
        List<Contact> contactList=new List<Contact>([select id,OtherPhone,AccountId,MobilePhone from Contact where accountid in: trigger.new]);
       system.debug('contactList::'+contactList);
        for(Contact con:contactList){
            if(trigger.NewMap.get(con.AccountId).Phone!=null){
                 con.MobilePhone=trigger.NewMap.get(con.AccountId).Phone;
            }
           
        }
        Update contactList;
    }else if(Trigger.isBefore && trigger.isDelete){
   List<Contact> contactList=new List<Contact>([select id,OtherPhone,AccountId,MobilePhone from Contact where AccountId in: trigger.old]);
    Account ac=[select id from Account where id='0012y00000DYSYJAA5'];
        for(Contact con:contactList){
            con.AccountId=ac.id;      
        }
        Update contactList;
    }
}