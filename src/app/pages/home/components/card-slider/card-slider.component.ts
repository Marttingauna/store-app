import { Component, ElementRef, ViewChild } from "@angular/core"

import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: [
    './card-slider.component.css',
    '../../../../../../node_modules/keen-slider/keen-slider.min.css'
  ]
})

export class CardSliderComponent  {
  @ViewChild("sliderCardRef") sliderCardRef!: ElementRef<HTMLElement>

  sliderCard!: KeenSliderInstance

  ngAfterViewInit() {
    
    this.sliderCard = new KeenSlider(this.sliderCardRef.nativeElement, {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 5,
        spacing: 15,
      },
    })
  }

  ngOnDestroy() {
    if (this.sliderCard) this.sliderCard.destroy()
  }

  onClick() {
    console.log('Hola')
  }

}
 