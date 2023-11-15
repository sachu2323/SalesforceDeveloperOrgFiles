import { LightningElement } from 'lwc';

export default class TestLWC extends LightningElement {
    name = "sachu";

    testFunction(event){
        this.name = event.target.value;
    }
}