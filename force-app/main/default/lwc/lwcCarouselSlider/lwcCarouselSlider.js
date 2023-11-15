import { LightningElement } from 'lwc';
import CAROUSELIMG1 from "@salesforce/resourceUrl/carouselImage1";
import CAROUSELIMG2 from "@salesforce/resourceUrl/carouselImage2";

export default class LwcCarouselSlider extends LightningElement {
    carouselImage1 = CAROUSELIMG1;
    carouselImage2 = CAROUSELIMG2;
}