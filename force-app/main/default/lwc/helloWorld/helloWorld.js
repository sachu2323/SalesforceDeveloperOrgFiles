import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'World';
  changeHandler(event) {
    console.log("test");
    this.greeting = event.target.value;
  }
}