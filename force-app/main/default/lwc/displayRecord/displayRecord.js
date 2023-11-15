import { LightningElement, api } from 'lwc';

export default class DisplayRecord extends LightningElement {
    @api recordId;
    @api objectApiName;
    fields = ['Id','Name','Type','Industry'];
}