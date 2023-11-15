import { LightningElement, wire, track } from 'lwc';
import Id from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi';
import UserNameFIELD from '@salesforce/schema/User.Name';
import userEmailFIELD from '@salesforce/schema/User.Email';
import userIsActiveFIELD from '@salesforce/schema/User.IsActive';
import userAliasFIELD from '@salesforce/schema/User.Alias';
  
  
export default class LWCCurrentUserInfo extends LightningElement {
    @track error;
    @track userId = Id;
    @track currentUserName;
    @track currentUserEmail;
    @track currentIsActive;
    @track currentUserAlias;
 
    @wire(getRecord, { recordId: Id, fields: [UserNameFIELD, userEmailFIELD, userIsActiveFIELD, userAliasFIELD ]}) 
    currentUserInfo({error, data}) {
        if (data) {
            this.currentUserName = data.fields.Name.value;
            this.currentUserEmail = data.fields.Email.value;
            this.currentIsActive = data.fields.IsActive.value;
            this.currentUserAlias = data.fields.Alias.value;
        } else if (error) {
            this.error = error ;
        }
    }
}