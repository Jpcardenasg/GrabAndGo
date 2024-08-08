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
        return this.http.get<InventoryResults>(`${this.apiUrl}/allinventories`);
    };

    saveInventory(inventory: Inventory): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/saveInventory`, inventory);

    };
}
