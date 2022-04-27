import { NgModule } from "@angular/core";
import { CardSliderComponent } from "./card-slider/card-slider.component";
import { HeaderSliderComponent } from "./header-slider/header-slider.component";
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
    declarations: [
        CardSliderComponent,
        HeaderSliderComponent,
        HomePageComponent,
    ],
    exports: [
        HomePageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { } 