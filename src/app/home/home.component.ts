import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/entities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('assets/data.json').subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

}
