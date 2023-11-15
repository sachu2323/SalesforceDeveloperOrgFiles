import { LightningElement, wire, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getRecord, updateRecord, refreshApex } from 'lightning/uiRecordApi';
import sendEmail from '@salesforce/apex/EmailSender.sendEmail';

export default class ApproveLWCValdnTest extends LightningElement {

    //     handleClick(event) {
    //     console.log('ButtonClicked');
    //     this.showToastMessage("Error", "Entity name is a required field", "error", "sticky");
    // }
    @track recipientEmail = '';
    @track subject = '';
    @track body = '';
    @api recordId;
    recordData;
    @track isApproveButtonVisible = true;
    @track StatusValue ;
    @track isShowModal = false;
    @track isShowModal22 = false;
    @wire(getRecord, { recordId: '$recordId', fields: ['Loan__c.Loan_Amount__c', 'Loan__c.Name', 'Loan__c.Loan_Status__c', 'Loan__c.Loan_type__c',] })
    wiredRecord({ error, data }) {
        if (data) {
            this.recordData = data;
            // Access the value of Loan_Amount__c


        } else if (error) {
            // Handle error
        }
    }

    // connectedCallback() {
    //     console.log("CallconnectedCallback");
    //     //console.log('Record Data222:', this.recordData);
    //     this.recordData.fields.Loan_Status__c.value = "Approved";
    //     console.log('Loan Status2211:', this.recordData.fields.Loan_Status__c.value);
    //     this.recordData.fields.Loan_Status__c.value;
    //     this.StatusValue = this.recordData.fields.Loan_Status__c.value;
    //     // Condition to show or hide the button based on a value
    //     if (this.StatusValue == "Approved") {
    //       this.isApproveButtonVisible = true;
    //     } else {
    //       this.isApproveButtonVisible = false;
    //     }
    //     console.log('ValueBool',this.isApproveButtonVisible);
    //   }

    handleClick() {

        console.log("FullDetails");
        console.log('Record Data2:', this.recordData);
        console.log('Record ID:', this.recordData.id);
        console.log('Loan Amount:', this.recordData.fields.Loan_Amount__c.value);
        console.log('Loan Name:', this.recordData.fields.Name.value);
        console.log('Loan Status2211:', this.recordData.fields.Loan_Status__c.value);
        console.log('Loan Type:', this.recordData.fields.Loan_type__c.value);
        if (this.recordData.fields.Loan_Amount__c.value == null) {
            console.log("null");
            this.showToastMessage("Error", "Loan Amount cannot be null", "error", "sticky");
        } else if (this.recordData.fields.Loan_type__c.value == null) {
            this.showToastMessage("Error", "Loan Type cannot be null", "error", "sticky");
        } else {
            console.log("not null22");
            const fields = {};
            console.log("fields222", this.fields);
            fields.Id = this.recordData.id;
            // fields.Loan_Amount__c = 200000; // Set the new value here
            fields.Loan_Status__c = "Approved";
            if (this.recordData.fields.Loan_Status__c.value != "Approved") {
                const recordInput = { fields };

                updateRecord(recordInput)
                    .then(() => {
                        this.showToastMessage('Success', 'Loan Approved successfully.', 'success', 'dismissable');
                        recipientEmail = 'sachu.santhosh@speridian.com';
                        subject = 'Test';
                        body = 'Test Body';
                        sendEmail({ recipientEmail: this.recipientEmail, subject: this.subject, body: this.body })
                        .then(result => {
                            // Email sent successfully
                            console.log('Email sent');
                        })
                        .catch(error => {
                            // Handle error
                            console.log('Email not sent');
                            console.error(error);
                        });
                        location.reload();
                        //$A.get('e.force:refreshView').fire();
                        // this.isShowModal22 = true;
                        // this.refreshData();
                      
                            // Perform some actions or check conditions here
                            // ...
                          
                            // Call the refreshPage function to trigger the page refresh
                            //this.refreshPage();
                       

                    })
                    .catch(error => {
                        console.error('An error occurred while updating the record:', error);
                        console.log('Error body:', error.body);
                        this.showToastMessage('Error', 'An error occurred while trying to update the record. Please try again.', 'error', 'dismissable');
                    });
            } else {
                this.showToastMessage("Warning", "Your Loan has been Already Approved", "error", "sticky");
            }
        }
        // You can add more fields here if needed


    }

    handleClick2() {
        this.isShowModal = true;


        // You can add more fields here if needed


    }

    hideModalBox() {
        event.preventDefault(); // Prevent form submission
        const form = this.template.querySelector('form');
        if (form.checkValidity()) {
            // Perform further processing or submit the form
            console.log('Form is valid');
            this.isShowModal = false;
            // const inputField = this.template.querySelector('[data-id="inputField"]');
            // if (inputField) {
            //     const inputValue = inputField.value;
            //     console.log('Input Value:', inputValue);
            //     // Perform further processing or save the value
            // }
            console.log('Input Value:', this.template.querySelector('[data-id="inputField"]').value);
            console.log("FullDetails");
            console.log('Record Data2:', this.recordData);
            console.log('Record ID:', this.recordData.id);
            console.log('Loan Amount:', this.recordData.fields.Loan_Amount__c.value);
            console.log('Loan Name:', this.recordData.fields.Name.value);
            console.log('Loan Status2211:', this.recordData.fields.Loan_Status__c.value);
            console.log('Loan Type:', this.recordData.fields.Loan_type__c.value);
    
            const fields = {};
            console.log("fields2224", this.fields);
            console.log('Input Value:', this.template.querySelector('[data-id="inputField"]').value);
            fields.Id = this.recordData.id;
            // fields.Loan_Amount__c = 200000; // Set the new value here
            fields.Loan_Status__c = "Rejected";
            fields.Rejection_Reason__c = this.template.querySelector('[data-id="inputField"]').value;
            if (this.recordData.fields.Loan_Status__c.value != "Rejected") {
                const recordInput = { fields };
    
                updateRecord(recordInput)
                    .then(() => {
                        this.showToastMessage('Success', 'Loan Rejected successfully.', 'success', 'dismissable');
                        location.reload();
                        //return refreshApex(this.wiredRecord);
                    })
                    .catch(error => {
                        console.error('An error occurred while updating the record:', error);
                        console.log('Error body:', error);
                        this.showToastMessage('Error', 'An error occurred while trying to update the record. Please try again.', 'error', 'dismissable');
                    });
            } else {
                this.showToastMessage("Warning", "Your Loan has been Already Rejected", "error", "sticky");
            }
        } else {
            this.showToastMessage("Warning", "Please Enter Reason", "error", "sticky");
            form.reportValidity(); // Show validation errors
        }

    }

    showToastMessage(title, message, variant, mode) {
        const toastEvent = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(toastEvent);
    }

// connectedCallback() {
//   // Set the refresh interval (in milliseconds)
//   const refreshInterval = 5000; // Refresh every 5 seconds

//   // Start the refresh timer
//   setTimeout(() => {
//     location.reload();
//   }, refreshInterval);
// }
refreshPage() {
    location.reload();
  }
  
refreshData() {
    refreshApex(this.updatedVariable)
        .then(() => {
            // Perform any additional logic after the refresh
            // ...
        })
        .catch(error => {
            // Handle any errors that occur during the refresh
            // ...
        });
}

    

    hideModalBox2() {
        this.isShowModal = false;
    }




}