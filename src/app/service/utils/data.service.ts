import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];

  add(item: any): void {
    this.data.push(item);
  }

  delete(id: string): void {
    this.data = this.data.filter(item => item.id !== id);
  }

  update(id: string, updatedItem: any): void {
    const index = this.data.findIndex(item => item.id === id);
    if (index !== -1) {
      this.data[index] = updatedItem;
    }
  }

  get(id: string): any {
    return this.data.find(item => item.id === id);
  }

  getAll(): any[] {
    return this.data;
  }
}
