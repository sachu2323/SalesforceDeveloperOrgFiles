import { LightningElement, track, wire } from 'lwc';
import getAccountDataToExport from '@salesforce/apex/ExportDataController.getAccountDataToExport';

export default class ExportDataAsCsvOrXls extends LightningElement {

    @track conatctData = {}

    columnHeader = ['ID', 'FirstName', 'LastName', 'Email' ]

    @wire(getAccountDataToExport)
    wiredData({ error, data }) {
        if (data) {
            console.log('Data', data);
            this.conatctData = data;
        } else if (error) {
            console.error('Error:', error);
        }
    }


}