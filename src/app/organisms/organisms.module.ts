import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IgxNavigationDrawerModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule } from 'igniteui-angular';
import { BackgroundComponent } from './background/background.component';
import { SidebarContentComponent } from './sidebar-list-content/sidebar-list-content.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { CardRightComponent } from './card-right/card-right.component';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
  declarations: [
    SidebarComponent,
    BackgroundComponent,
    SidebarContentComponent,
    HeaderTopComponent,
    CardRightComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    IgxNavigationDrawerModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxPieChartModule,
    IgxCategoryChartModule
  ],
  exports: [
    SidebarComponent,
    BackgroundComponent,
    SidebarContentComponent,
    HeaderTopComponent,
    CardRightComponent
  ]
})
export class OrganismsModule { }
