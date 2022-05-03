import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
/* Modulo de Angular donde importamos las clases de Material, usa una matriz de imports 
donde se especifica que se importa el modulo de Material 
"exports" donde se especifica que se exporta el modulo de Material */

@NgModule({
 
  exports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ]
})
//Material Module sera un modulo que contiene todos los componentes de material y exporta una variable de tipo MaterialModule
//Administrar importaciones de material en un solo archivo separado pero aun tener acceso.
export class MaterialModule { }
