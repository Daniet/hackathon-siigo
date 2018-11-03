import { Injectable } from '@angular/core';
// import { HttpClient } from '@angualar/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url_server = ''

  constructor(
    // private http:HttpClient
  ) { }

  get_bill(){
    return this.http.get(url_server)
    // .subscribe(data=>{
    //   cosnole.log(this.url_server,data.obj)
    // })
  }
}
