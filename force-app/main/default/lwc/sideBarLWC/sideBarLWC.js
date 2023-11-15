import { LightningElement } from 'lwc';

export default class SideBarLWC extends LightningElement {
    page = 1;

    previousHandler() {
      if (this.page > 1) {
        this.page = this.page - 1;
      }
    }
  
    nextHandler() {
      this.page = this.page + 1;
    }
}