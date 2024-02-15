import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { Product } from '../../interfaces/Product';
import { SelectItem } from '../../interfaces/SelectItem';
import { ProductService } from '../../services/produc.service';
import { PrimeNGConfig } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  sortOptions: SelectItem[] = [];
  sortOrder!: number;
  sortField!: string;
  menu!: string;
  //total: number = 0;

  constructor(
    private productService: ProductService, 
    private primengConfig: PrimeNGConfig,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.products = this.productService.getArticle();
    console.log(this.products)
    this.menu = this.products[0].description;

    this.primengConfig.ripple = true;    
  }

  cargarAlCarrito(precio: number): void {
    //this.menuService.total += precio;
    //this.menuService.contadorProducto += 1;
  }
}
