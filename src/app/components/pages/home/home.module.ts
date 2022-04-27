import { NgModule } from "@angular/core";
import { CardSliderComponent } from "./card-slider/card-slider.component";
import { HeaderSliderComponent } from "./header-slider/header-slider.component";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        CardSliderComponent,
        HeaderSliderComponent
    ],
    exports: [
        CardSliderComponent,
        HeaderSliderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }