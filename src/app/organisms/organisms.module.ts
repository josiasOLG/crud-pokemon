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
import { ReactiveFormsModule } from '@angular/forms';
import { CardListComponent } from './card-list/card-list.component';
import { StatisticsCardsComponent } from './statistics-cards/statistics-cards.component';
import { WelcomeBlockComponent } from './welcome-block/welcome-block.component';

@NgModule({
  declarations: [
    SidebarComponent,
    BackgroundComponent,
    SidebarContentComponent,
    HeaderTopComponent,
    CardRightComponent,
    CardListComponent,
    StatisticsCardsComponent,
    WelcomeBlockComponent
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    IgxNavigationDrawerModule,
    IgxInputGroupModule,
    IgxIconModule,
    IgxButtonModule,
    IgxPieChartModule,
    IgxCategoryChartModule,
    ReactiveFormsModule
  ],
  exports: [
    SidebarComponent,
    BackgroundComponent,
    SidebarContentComponent,
    HeaderTopComponent,
    CardRightComponent,
    CardListComponent,
    StatisticsCardsComponent,
    WelcomeBlockComponent
  ]
})
export class OrganismsModule { }
