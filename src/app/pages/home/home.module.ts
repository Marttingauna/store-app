import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CardSliderComponent } from "./components/card-slider/card-slider.component";
import { HeaderSliderComponent } from "./components/header-slider/header-slider.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { HomeRoutingModule } from "./home-routing.module";

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
        CommonModule,
        HomeRoutingModule,
    ]
})
export class HomeModule { } 