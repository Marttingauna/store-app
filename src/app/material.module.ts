import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';	
import { MatInputModule } from '@angular/material/input';	
import {MatTableModule} from '@angular/material/table';
//Modulo de Angular donde importamos las clases de Material, usa una matriz de imports donde se especifica que se importa el modulo de Material
//y una matriz de exports donde se especifica que se exporta el modulo de Material
@NgModule({
    imports: [MatButtonModule,MatInputModule, MatTableModule],
    exports: [MatButtonModule,MatInputModule, MatTableModule],
})

//Material Module sera un modulo que contiene todos los componentes de material y exporta una variable de tipo MaterialModule
//Administrar importaciones de material en un solo archivo separado pero aun tener acceso.
export class MeterialModule {
}