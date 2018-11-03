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
    private httpService:HttpService
  ) { }

  bills:any

  ngOnInit() {

    this.bills = [{
      id: 0,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 1,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 2,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 3,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 4,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 5,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 6,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 7,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 8,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 9,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 10,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 11,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 12,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 13,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },{
      id: 14,
      company: 'asfasfsafasf',
      bill: 'asdfafafs'
    },]

  }

  submit(){
    this.httpService.search_bill(this.search).subscribe(data=>{
      console.log(data)
    })
  }

}
