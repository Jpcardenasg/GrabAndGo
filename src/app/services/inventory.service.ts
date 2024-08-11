import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Inventory, InventoryResults } from '../interfaces/Inventory';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InventoryService {
    private readonly apiUrl = `${environment.apiUrl}/inventory`;

    constructor(private http: HttpClient) { }

    getInventoryList(): Observable<InventoryResults> {
        return this.http.get<InventoryResults>(`${this.apiUrl}/allInventories`);
    }

    getInventory(id: number): Observable<Inventory> {
        return this.http.get<Inventory>(`${this.apiUrl}/getInventory/${id}`);
    }

    deleteInventory(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deleteInventory/${id}`);
    }

    updateInventory(id: number, inventory: Inventory): Observable<Inventory> {
        return this.http.put<Inventory>(`${this.apiUrl}/updateInventory/${id}`, inventory);
    }

    saveInventory(inventory: Inventory): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveInventory`, inventory);

    }
}
