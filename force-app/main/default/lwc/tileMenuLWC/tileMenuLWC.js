import { LightningElement, track } from 'lwc';
import CARDICON from "@salesforce/resourceUrl/cardIcon";
import { NavigationMixin } from 'lightning/navigation';

export default class TileMenuLWC extends LightningElement {
    cardIcon = CARDICON;
    showFlow = false;
    showCards = true;
    renderedCallback()
    {
    this.template.querySelectorAll(".card").forEach((element) => {
        element.addEventListener("mouseover", (e) => {
            e.target.querySelector('p').style.display = "block";
            e.target.querySelector('.sub-card').style.display = "none";
            e.target.querySelector('.imgdiv').style.display = "none";
    })});

    this.template.querySelectorAll(".card").forEach((element) => {
        element.addEventListener("mouseleave", (e) => {
            e.target.querySelector('p').style.display = "none";
            e.target.querySelector('.sub-card').style.display = "block";
            e.target.querySelector('.imgdiv').style.display = "block";
    })});
    }
    
    handleFlowButtonClick() {
        this.showFlow = true;
        this.showCards = false;
    }
}