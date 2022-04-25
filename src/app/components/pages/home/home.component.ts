import { Component, ElementRef, ViewChild } from "@angular/core"

import KeenSlider, { KeenSliderInstance } from "keen-slider"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  // "../../../../node_modules/keen-slider/keen-slider.min.css",
  "../../../../../node_modules/keen-slider/keen-slider.min.css",
]
})
export class HomeComponent  {
  @ViewChild("sliderRef") sliderRef!: ElementRef<HTMLElement>

  slider!: KeenSliderInstance;
  constructor() { }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      loop: true,
      mode: "free-snap",
      slides: {
        perView: 5,
        spacing: 15,
      },
    })
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy()
  }
  
  onClick() {
    console.log('Hola')
  }

}
