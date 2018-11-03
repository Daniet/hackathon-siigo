import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.sass']
})
export class InvoiceDetailComponent implements OnInit {

  constructor() { }

  bill ={
    company: 'adasdafasfafsqwfafaf',
    num_bill: 'fna 35353245325325',
    box: '23',
    products: [{
      name: 'fsafasfasf',
      unit: 4324324,
      cant: 534
    },{
      name: 'fsafasfasf',
      unit: 4324324,
      cant: 534
    },{
      name: 'fsafasfasf',
      unit: 4324324,
      cant: 534
    },{
      name: 'fsafasfasf',
      unit: 4324324,
      cant: 534
    },{
      name: 'fsafasfasf',
      unit: 4324324,
      cant: 534
    }],
    way_pay: 43243,
    pay: 423424,
    tax: 0.2
  }

  total:number = 0
  val_products:number = 0

  ngOnInit() {
    this.val_product = this.totalProduct(this.bill.products)
    this.total = this.cal_total(this.bill.tax, this.val_products)
  }

  totalProduct(product){
    let value = 0
    for(let x in product){
      value += (product[x].unit * product[x].cant)
    }
    return value
  }

  cal_total(tax, val_product){
    return tax * val_product
  }

}
