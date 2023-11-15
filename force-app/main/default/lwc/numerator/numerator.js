import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    @api counter = 0;
    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handleMultiply(event) {
        const factor = event.detail;
        console.log("factor5456",factor);
        this.counter *= factor;
      }
}