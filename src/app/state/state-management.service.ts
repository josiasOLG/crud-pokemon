import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  private _stateChanged: EventEmitter<any> = new EventEmitter();

  // Emitir evento de mudança de estado
  emitStateChange(data: any) {
    this._stateChanged.emit(data);
  }

  // Método para ouvir mudanças
  onStateChanged() {
    return this._stateChanged;
  }
}
