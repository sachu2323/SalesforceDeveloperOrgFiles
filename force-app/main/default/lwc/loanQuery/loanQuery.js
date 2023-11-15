import { LightningElement, wire, track } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/myResource';
import IMAGES from "@salesforce/resourceUrl/cartIcon";
import { loadStyle } from 'lightning/platformResourceLoader';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import getAccounts from '@salesforce/apex/MyController.getAccounts';
import { NavigationMixin } from 'lightning/navigation';


export default class LoanQuery extends LightningElement {
    @track data = []; // Your data to be displayed in the table
    @track selectedRowIds = new Set();
    torontoImage = IMAGES;
    spring20Logo = My_Resource + '/images/add-to-cart-icon.jpg';
    totalCost = 0;
    displaySelectedRows = [];
    selectedRows = [];
    searchTerm;
    accounts;
    showDialog = false;
    columns = [
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        { label: 'Price', fieldName: 'Price__c', type: 'text' },
        { label: 'Add to Cart',
          type: 'button-icon',
          typeAttributes: { iconName: 'utility:cart',title: 'Add to Cart', label: 'Add to Cart', name: 'add_to_cart',  iconClass: 'custom-icon-style',    
          variant: 'border-filled'},
          onclick: this.totalPrice
        }
      ];
        

@wire(getAccounts, { searchTerm: '$searchTerm' })
    wiredAccounts({ error, data }) {
        if (data) {
            console.log("Test");
            console.log("data",data);
            this.accounts = data;
        } else if (error) {
            console.error('Error retrieving accounts', error);
        }
    }
    totalPrice(){
        console.log("jgyftyghyg");
    }
    handleSearchTermChange(event) {
        this.searchTerm = event.target.value;
    }

    GoToCartFunction() {
        this.totalCost = 0;
        try{
            this.displaySelectedRows = this.selectedRows;
        // Use the NavigationMixin to navigate to the desired page
        console.log('Go to Cart Button is clicked');
        console.log('Selected Rows:', this.selectedRows);
        console.log('Selected Rows:', this.selectedRows.length);
        this.selectedRows.forEach((record) => {
            console.log(record.Name);

        });
        this.displaySelectedRows.forEach((record2) => {

            console.log('Testing '+record2.Name);
            if(record2.Price__c!=null){
            this.totalCost = this.totalCost + record2.Price__c;
            }else{
                console.log("price is null");
            }
        });
        console.log('TotalCost = ',this.totalCost);
        let doc = '<table>';
            doc += '<tr>';
            doc += '<th>Agent Name</th>';
            doc += '<th>Business Records</th>';
            doc += '<th>Price</th>';
            doc += '<th>Action</th>';
            doc += '</tr>';

            this.selectedRows.forEach((record) => {
                doc += '<tr>';
                doc += `<td>${record.Name}</td>`;
                doc += `<td>${record.Industry}</td>`;
                doc += `<td>${record.Price__c}</td>`;
                doc += '<td><button class="custom-icon-style">Add to Cart</button></td>';
                doc += '</tr>';
            });

            doc += '</table>';

            // Show the table in a modal or custom pop-up
            // For simplicity, let's just use an alert here
            // alert(doc);
            
    }
    catch (error) {
        // Handle the exception here
        console.error('An error occurred234:', error.message);
    }
      }

      ClearCartFunction(event) {
        console.log('Clear Cart Button is clicked');
        this.selectedRows = [];
        console.log('Clear Cart Button is clicked', selectedRows.length);
        this.isEmptyCart = true;
        this.showDialog = true;
    }

    handleRowAction(event) {
        this.totalCost = 0;
        const action = event.detail.action;
        const row = event.detail.row;
      
        if (action.name === 'add_to_cart') {
          // Check if the row is already in the selectedRows array
            // Check if the row is already in the selectedRows array
            const exists = this.selectedRows.some((r) => r.Id === row.Id);
            if (!exists) {
                this.selectedRows = [...this.selectedRows, row];
            } else {
                // Remove the row from the selectedRows array if it's already selected
                this.selectedRows = this.selectedRows.filter((r) => r.Id !== row.Id);
            }
            console.log('Selected Rows12:', this.selectedRows.length);
            this.selectedRows.forEach((record3) => {

                console.log('Testing34 '+record3.Name);
                this.totalCost = this.totalCost + record3.Price__c;
            });
            console.log('TotalCost23 = ',this.totalCost);
        }
      }

      handleRowSelection(event) {
        this.selectedRowIds = new Set(event.detail.selectedRows.map(row => row.Id));
    }

    getRowClass(row) {
        return this.selectedRowIds.has(row.Id) ? 'selected-row' : '';
    }
      
      
    exportContactData(){
        // Prepare a html table
        try{
        console.log("Inside Download");
        let doc = '<table>';
        // Add styles for the table
        doc += '<style>';
        doc += 'table, th, td {';
        doc += '    border: 1px solid black;';
        doc += '    border-collapse: collapse;';
        doc += '}';          
        doc += '</style>';
        console.log("Inside Download2");
        this.accounts.forEach(record => {
            doc += '<tr>';
            doc += '<th>'+record.Id+'</th>'; 
            doc += '<th>'+record.Name+'</th>'; 
            doc += '<th>'+record.Industry+'</th>';
            doc += '<th>'+record.Type+'</th>'; 
            doc += '</tr>';
        });
        doc += '</table>';
        console.log("Inside Download3");
        var element = 'data:application/vnd.ms-excel,' + encodeURIComponent(doc);
        let downloadElement = document.createElement('a');
        downloadElement.href = element;
        downloadElement.target = '_self';
        // use .csv as extension on below line if you want to export data as csv
        downloadElement.download = 'Contact Data.xls';
        document.body.appendChild(downloadElement);
        downloadElement.click();
        console.log("Inside Download4");
    }catch (error) {
        // Handle the exception here
        console.error('An error occurred234:', error.message);
    }
}
handleDeleteItem(event) {
    
    const rowIdToDelete = event.target.dataset.id;
    console.log('ROWID7ygy',rowIdToDelete);
    this.selectedRows = this.selectedRows.filter((row) => row.Id !== rowIdToDelete);
    console.log('Selected Rows after delete:', this.selectedRows);
    console.log('Selected Rows after delete:', this.selectedRows.length);
}
handleDeleteItem2(event) {
    console.log('DeleteClickjejbhyb1');
    const rowId = event.target.dataset.id;
    console.log('ROWID776',rowId);
    // Find and remove the corresponding row from displaySelectedRows
    this.displaySelectedRows = this.displaySelectedRows.filter(record => record.Id !== rowId);
    console.log('Selected Rows after delete:', this.displaySelectedRows.length);

}
}