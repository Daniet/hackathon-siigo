import { Component, OnInit } from '@angular/core';

import { HttpService } from '../service/http.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  search:string

  constructor(
    private http:HttpService
  ) { }

  bills = [{
    id: 1,
    nit: '423442423412525',
    company: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 2,
    nit: '423442423412525',
    company: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 3,
    nit: '423442423412525',
    company: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 4,
    nit: '423442423412525',
    company: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },{
    id: 5,
    nit: '423442423412525',
    company: 'adadasdasdasdadssad',
    bill: 'ewrw-23424412423523'
  },]

  ngOnInit() {
  }

  log(){
    console.log(this.search)
  }

}
