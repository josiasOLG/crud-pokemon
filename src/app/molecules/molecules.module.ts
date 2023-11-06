import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { CardHomeComponent } from './card-home/card-home.component';
import { IgxIconModule } from 'igniteui-angular';
import { NoDataComponent } from './no-data/no-data.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { StatisticCardComponent } from './statistic-card/statistic-card.component';

@NgModule({
  declarations: [
    SidebarListComponent,
    ProfileHeaderComponent,
    CardHomeComponent,
    NoDataComponent,
    DropdownComponent,
    StatisticCardComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    IgxIconModule
  ],
  exports: [
    SidebarListComponent,
    ProfileHeaderComponent,
    CardHomeComponent,
    NoDataComponent,
    DropdownComponent,
    StatisticCardComponent
  ]
})
export class MoleculesModule { }
