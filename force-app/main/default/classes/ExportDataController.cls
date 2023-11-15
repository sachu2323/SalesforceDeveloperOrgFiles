/**
 * @description       : Query the 10 Contacts and return the results
**/
public with sharing class ExportDataController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> getAccountDataToExport(String searchTerm) {
        if (String.isNotBlank(searchTerm)) {
            return [SELECT Id, FirstName, LastName, Email 
                    FROM Contact 
                    WHERE FirstName LIKE :('%'+searchTerm+'%') OR LastName LIKE :('%'+searchTerm+'%')
                    LIMIT 10];
        } else {
            return [SELECT Id, FirstName, LastName, Email 
                    FROM Contact 
                    LIMIT 10];
        }
    }
}