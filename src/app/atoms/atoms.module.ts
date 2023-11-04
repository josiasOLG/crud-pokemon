import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxIconModule } from 'igniteui-angular';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';

@NgModule({
  declarations: [
    SidebarItemComponent,
    ProfileImageComponent,
  ],
  imports: [
    CommonModule,
    IgxIconModule
  ],
  exports: [
    SidebarItemComponent,
    ProfileImageComponent,
  ]
})
export class AtomsModule { }
