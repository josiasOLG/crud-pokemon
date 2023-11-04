import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';

@NgModule({
  declarations: [
    SidebarListComponent,
    ProfileHeaderComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    SidebarListComponent,
    ProfileHeaderComponent
  ]
})
export class MoleculesModule { }
