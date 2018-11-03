import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  constructor() { }

  bills = [{
    id: 1,
    nit: '423442423412525',
    empresa: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 2,
    nit: '423442423412525',
    empresa: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 3,
    nit: '423442423412525',
    empresa: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 4,
    nit: '423442423412525',
    empresa: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 5,
    nit: '423442423412525',
    empresa: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },]

  ngOnInit() {
  }

}
