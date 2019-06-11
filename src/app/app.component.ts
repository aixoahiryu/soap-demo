import { Component } from '@angular/core';
import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  client: Client;
  intA: number;
  intB: number;
  result: number;

	constructor(private soap: NgxSoapService, private http: HttpClient) {
    // this.http.get('/calculator/calculator.asmx?WSDL').subscribe(response => {
    //   this.soap.createClient(response as string).then(client => this.client = client);
    // });


		this.soap.createClient('http://www.dneonline.com/calculator.asmx?WSDL').then(client => this.client = client);
    // this.soap.createClient('http://webservices.amazon.com/AWSECommerceService/AWSECommerceService.wsdl').then(client => this.client = client);
	}

  add() {
        const body = {
          intA: this.intA,
          intB: this.intB
        };
        let promise1 = (<any>this.client).Add(body).subscribe((res: ISoapMethodResponse) => {
          this.result = res.result.AddResult;
          console.log(res);
        });
    }
  
  amazon(){
    const body = {
          intA: this.intA,
          intB: this.intB
        };
        (<any>this.client).ItemSearch(body).subscribe((res: ISoapMethodResponse) => {
          this.result = res.result.AddResult;
          console.log(res);
        });
  }
}
