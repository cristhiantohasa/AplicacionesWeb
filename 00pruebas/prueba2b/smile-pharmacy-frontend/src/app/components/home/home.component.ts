import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service'

import Pharmacys from 'src/assets/json/pharmacys.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]

})
export class HomeComponent implements OnInit {

  public url: string;
  public products: Product[];

  Pharmacys: any = Pharmacys;

  constructor(
    private _productService: ProductService
  ) {
    this.url = Global.url;
    this.products = [];
  }

  ngOnInit(): void {
    this.readProducts();
  }

  readProducts() {
    this._productService.readProducts().subscribe(
      response => {
        if( response.products ) {
          for( let i = 0; i < response.products.length; i++ ) {
            if ( response.products[i].promocion )
              this.products.push( response.products[i] )
          }
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

}
