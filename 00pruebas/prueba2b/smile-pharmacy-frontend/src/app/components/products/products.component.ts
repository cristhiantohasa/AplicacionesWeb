import { Component, OnInit, ViewChild } from '@angular/core';
import { Global } from '../../services/global';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { LoadService } from '../../services/load.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService, LoadService]
})
export class ProductsComponent implements OnInit {

  public url: string;
  public product: Product;
  public products: Product[];
  public saveProduct: Product;
  public searchProduct: any;
  public uploadImage: Array<File>;
  public productId: string;
  public user: any;
  public status: string;

  @ViewChild( 'image' ) image: any;
  @ViewChild( 'nombre' ) nombre: any;
  @ViewChild( 'boton1' ) boton1: any;
  @ViewChild( 'boton2' ) boton2: any;
  @ViewChild( 'boton3' ) boton3: any;

  constructor(
    private _productService: ProductService,
    private _loadService: LoadService
  ) {
    this.url = Global.url;
    this.product = new Product( null, null, null, null, null, null );
    this.products = [];
    this.saveProduct = new Product( null, null, null, null, null, null );
    this.searchProduct = new Product( null, null, null, null, null, null );
    this.uploadImage = [];
    this.productId = "";
    this.status = "";
    this.user = ''
  }

  ngOnInit(): void {
    this.readProducts();
    this.readUser()
  }

  readUser() {
    this.user = localStorage.getItem( "user" );
  }

  createProduct( form: NgForm ) {
    this._productService.createProduct( this.product ).subscribe(
      response => {
        if( response.product ) {
          if( this.saveProduct ) {
            this._loadService.productRequest( Global.url + "upload-image/" + response.product._id, [], this.uploadImage, 'imagen' )
            .then( ( result: any ) => {
              this.saveProduct = result.response;
              this.status = 'success';
              this.productId = result.product._id;
              form.reset();
              this.image.nativeElement.value = '';
              alert( "Producto creado con éxito" )
              window.location.reload();
            } );
          } else {
            this.status = 'failed';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  readProducts() {
    this._productService.readProducts().subscribe(
      response => {
        if( response.products ) {
          this.products = response.products
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  readProduct() {
    this._productService.readProduct( this.nombre.nativeElement.value ).subscribe(
      response => {
        if( response.product ) {
          this.searchProduct = response.product;
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  updateProduct( form: NgForm ) { 
    this._productService.updateProduct( this.searchProduct ).subscribe(
      response => {
        if( response.product ) {
          if( this.saveProduct ) {
            this._loadService.productRequest( Global.url + "upload-image/" + response.product._id, [], this.uploadImage, 'imagen' )
            .then( ( result: any ) => {
              this.saveProduct = result.response;
              this.status = 'success';
              alert( "Producto actualzado con éxito" )
              window.location.reload();
            } );
          } else {
            this.saveProduct = response.product;
            this.status = 'failed';
          }
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  deleteProduct( form: NgForm ) { 
    this._productService.deleteProduct( this.nombre.nativeElement.value ).subscribe(
      response => {
        if( response.product ) {
          alert( "Producto eliminado con éxito" )
          window.location.reload();
        }
      },
      error => {
        console.log( <any>error );
      }
    );
  }

  imageChangeEvent( imageSelected: any ) {
    this.uploadImage = <Array<File>>imageSelected.target.files;
  }

}
