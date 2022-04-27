import { Component, ElementRef, ViewChild } from "@angular/core"

import KeenSlider, { KeenSliderInstance } from "keen-slider"
@Component({
  selector: 'app-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrls: [
    './header-slider.component.css',
    '../../../../../../node_modules/keen-slider/keen-slider.min.css',
  ]
})

export class HeaderSliderComponent  {
  @ViewChild("sliderHeaderRef") sliderHeaderRef!: ElementRef<HTMLElement>
  sliderHeader!: KeenSliderInstance
  
  ngAfterViewInit() {
    this.sliderHeader = new KeenSlider(this.sliderHeaderRef.nativeElement, {
      loop: true,
    })
  }

  ngOnDestroy() {
    if (this.sliderHeader) this.sliderHeader.destroy()
  }

}
  