import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  getImage(width: number, height: number, productName: string): string {
    return `../../../../public/products/${productName}.jpg`;
  }

}