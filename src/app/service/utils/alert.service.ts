import { Injectable } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private dialog: IgxDialogComponent | null = null;
  private leftButtonClicked = new Subject<boolean>();
  private rightButtonClicked = new Subject<boolean>();
  private subscriptions = new Subscription();

  public registerDialog(dialog: IgxDialogComponent): void {
    this.dialog = dialog;
    this.subscriptions.add(this.dialog.leftButtonSelect.subscribe(() => {
      this.leftButtonClicked.next(false);
    }));
    this.subscriptions.add(this.dialog.rightButtonSelect.subscribe(() => {
      this.rightButtonClicked.next(true);
    }));
  }

  public showAlert(options: AlertOptions): { leftButtonClicked: Observable<boolean>; rightButtonClicked: Observable<boolean> }  | null {
    const {
      message,
      autoClose = true,
      autoCloseTime = 3000,
      enableButtons = false,
      closeModal = true,
    } = options;

    if (!this.dialog) {
      console.error('Alert dialog not registered!');
      return null;
    }

    this.dialog.message = message;
    this.dialog.leftButtonLabel = enableButtons ? 'Cancelar' : '';
    this.dialog.rightButtonLabel = enableButtons ? 'Prosseguir' : '';
    this.dialog.open();
    if (autoClose) {
      setTimeout(() => {
        this.closeDialog();
      }, autoCloseTime);
    }

    this.dialog.leftButtonSelect.subscribe(() => {
      this.leftButtonClicked.next(false); // Emite 'false' quando o botão "Cancelar" é clicado
      if (!options.autoClose) this.closeDialog(); // Feche o diálogo se autoClose estiver desativado
    });

    this.dialog.rightButtonSelect.subscribe(() => {
      this.rightButtonClicked.next(true); // Emite 'true' quando o botão "Prosseguir" é clicado
      if (!options.autoClose) this.closeDialog(); // Feche o diálogo se autoClose estiver desativado
    });

    return {
      leftButtonClicked: this.leftButtonClicked.asObservable(),
      rightButtonClicked: this.rightButtonClicked.asObservable()
    };
  }

  public closeDialog(): void {
    if (this.dialog) {
      this.dialog.close();
    }
    this.subscriptions.unsubscribe(); // Limpar todas as inscrições quando o diálogo é fechado
  }
}

interface AlertOptions {
  message: string;
  autoClose?: boolean;
  autoCloseTime?: number;
  enableButtons?: boolean;
  closeModal?: boolean;
}
