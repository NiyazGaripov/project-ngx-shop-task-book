import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../../../../../../shared/mocks/4-services/products';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {}

  public getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`api/products/suggestion`);
  }
}
