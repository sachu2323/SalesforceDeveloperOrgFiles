import { LightningElement ,track} from 'lwc';

export default class Resetlwc extends LightningElement {
    @track fieldValue = '';
    handleButtonClick() {
        console.log("teyfyhv");
        this.fieldValue = null;
    }
}