import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        // children: [
        //     //Rutas hijas donde se iran agregando los componentes que se quieran mostrar
        //     { path: '', component:  },
        //     { path: '', component:  },
        // ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {}
