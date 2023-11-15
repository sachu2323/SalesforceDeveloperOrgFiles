import { LightningElement, wire, track } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import getLoans from '@salesforce/apex/LoanController.getLoans';

export default class GetLoanRecords extends LightningElement {
    searchTerm;
    loans;
    columns = [
        
        { label: 'Loan Name', fieldName: 'Name', type: 'text' },
        { label: 'Loan Amount', fieldName: 'Loan_Amount__c', type: 'Currency' },
        { label: 'Loan Type', fieldName: 'Loan_type__c', type: 'Picklist' }
    ];

    @wire(getLoans, { searchTerm: '$searchTerm' })
    wiredAccounts({ error, data }) {
        if (data) {
            console.log("Test");
            console.log("data",data);
            this.loans = data;
        } else if (error) {
            console.error('Error retrieving accounts', error);
        }
    }

    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
    }
}