import { LightningElement, wire, track, api } from 'lwc';
import getRecordCount from '@salesforce/apex/LoanControllerCount.getRecordCount';
import getVPRecordCount from '@salesforce/apex/LoanControllerCount.getVPRecordCount';
import getApproveRecordCount from '@salesforce/apex/LoanControllerApprove.getApproveRecordCount';
import getRejectRecordCount from '@salesforce/apex/LoanControllerReject.getRejectRecordCount';

export default class YourComponentName extends LightningElement {
    @api recordCount;
    @api recordCountApprove;
    @api recordCountReject;
    @api recordCountVP;
    constantText = 'Approved';
    constantText1 = 'Rejected';
    constantText2 = 'Values Pending';
    constantTextTotal = 'Total Records';

    @wire(getRecordCount)
    wiredRecordCount({ error, data }) {
        if (data) {
            this.recordCount = data;
            //alert(this.recordCount);
            console.log('LoanRecordCount',this.recordCount);
        } else if (error) {
            console.error('LoanRecorderror',error);
        }
    }

    @wire(getApproveRecordCount)
    wiredRecordCount1({ error, data }) {
        if (data) {
            this.recordCountApprove = data;
            console.log('LoanRecordCount',this.recordCountApprove);
        } else if (error) {
            console.error('LoanRecorderror',error);
        }
    }

    @wire(getRejectRecordCount)
    wiredRecordCount2({ error, data }) {
        if (data) {
            this.recordCountReject = data;
            console.log('LoanRecordCount',this.recordCountReject);
        } else if (error) {
            console.error('LoanRecorderror',error);
        }
    }

    @wire(getVPRecordCount)
    wiredRecordCount3({ error, data }) {
        if (data) {
            this.recordCountVP = data;
            console.log('LoanRecordCount',this.recordCountVP);
        } else if (error) {
            console.error('LoanRecorderror',error);
        }
    }
}