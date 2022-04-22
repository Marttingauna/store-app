import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'Categorias',
          items: [
              {label: 'Acción', icon: 'pi pi-fw pi-plus'},
              {label: 'Download', icon: 'pi pi-fw pi-download'}
          ]
      },
      {
          label: 'Edit',
          items: [
              {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
              {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
          ]
      }];
  }

}
