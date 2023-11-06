import { Injectable, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  private _stateChanged: EventEmitter<any> = new EventEmitter();
  private _stateCardAll: EventEmitter<any> = new EventEmitter();
  private _stateDeckFilter: EventEmitter<any> = new EventEmitter();

  constructor(private store: Store){}

  emitDeckFilter(data: any) {
    this._stateDeckFilter.emit(data);
  }
  onDeckFilter() {
    return this._stateDeckFilter;
  }
  completeDeckFilter() {
    return this._stateDeckFilter.complete();
  }


  emitStateChange(data: any) {
    this._stateChanged.emit(data);
  }
  onStateChanged() {
    return this._stateChanged;
  }

  emitStateCardAll(data: any) {
    this._stateCardAll.emit(data);
  }
  onStateCardAllChanged() {
    return this._stateCardAll;
  }

  completeState(){
    return this._stateChanged.complete();
  }
  completeStateCardAll(){
    return this._stateCardAll.complete();
  }

  selectState<T>(selector: any): Observable<T> {
    return this.store.pipe(select(selector));
  }

  subscribeToStates(selectors: any[], callbacks: ((data: any) => void)[]): Subscription[] {
    return selectors.map((selector, index) =>
      this.store.pipe(select(selector)).subscribe(data => callbacks[index](data))
    );
  }


}
