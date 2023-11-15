import { LightningElement, wire, api, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    handleClick() {
        // @api recordId;
        // Display an alert when the button is clicked
        // alert('Hello, World!');
        const bike = {
            gears: 10,
            currentGear: 3,
            changeGear: function(direction, changeBy) {
              if (direction === 'up') {
                this.currentGear += changeBy;
              } else {
                this.currentGear -= changeBy;
              }
            }
          }
          console.log(bike.gears); // 10
          console.log(bike.currentGear); //3
          bike.changeGear('down', 1);
          console.log(bike.currentGear); //4
    }
}