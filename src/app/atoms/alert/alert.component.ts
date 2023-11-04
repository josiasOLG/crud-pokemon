// alert.component.ts
import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { AlertService } from 'src/app/service/utils/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @ViewChild('dialog', { static: true }) public dialog!: IgxDialogComponent;

  constructor(private alertService: AlertService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.alertService.registerDialog(this.dialog);
    this.cdr.detectChanges();
  }

  public showDialogForDuration(message: string, duration: number = 5000): void {
    this.dialog.message = message;
    this.dialog.open();
    setTimeout(() => {
      this.dialog.close();
      this.cdr.detectChanges();
    }, duration);
  }
}
