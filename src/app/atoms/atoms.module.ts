import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxIconModule } from 'igniteui-angular';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { ButtonComponent } from './button/button.component';
import { TitleComponent } from './title/title.component';
import { SubtitleComponent } from './subtitle/subtitle.component';

@NgModule({
  declarations: [
    SidebarItemComponent,
    ProfileImageComponent,
    ButtonComponent,
    TitleComponent,
    SubtitleComponent,
  ],
  imports: [
    CommonModule,
    IgxIconModule
  ],
  exports: [
    SidebarItemComponent,
    ProfileImageComponent,
    ButtonComponent,
    TitleComponent,
    SubtitleComponent,
  ]
})
export class AtomsModule { }
