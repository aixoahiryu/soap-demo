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

  // add() {
  //       const body = {
  //         intA: this.intA,
  //         intB: this.intB
  //       };
  //       let promise1 = (<any>this.client).Add(body).subscribe((res: ISoapMethodResponse) => {
  //         this.result = res.result.AddResult;
  //         console.log(res);
  //       });
  //   }

  add() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.dneonline.com/calculator.asmx?WSDL', true);

    // The following variable contains the xml SOAP request.
    const sr =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
          <soapenv:Header/>
          <soapenv:Body>
            <tem:Add>
              <tem:intA>`+this.intA+`</tem:intA>
              <tem:intB>`+this.intB+`</tem:intB>
            </tem:Add>
          </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                console.log(xmlhttp.response);
                // Here I'm getting the value contained by the <return> node.
                const response_number = parseInt(xml.getElementsByTagName('AddResult')[0].childNodes[0].nodeValue);
                // Print result square number.
                console.log(response_number);
                this.result = response_number;
            }
        }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }

  sub() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.dneonline.com/calculator.asmx?WSDL', true);

    // The following variable contains the xml SOAP request.
    const sr =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
          <soapenv:Header/>
          <soapenv:Body>
            <tem:Subtract>
              <tem:intA>`+this.intA+`</tem:intA>
              <tem:intB>`+this.intB+`</tem:intB>
            </tem:Subtract>
          </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                console.log(xmlhttp.response);
                // Here I'm getting the value contained by the <return> node.
                const response_number = parseInt(xml.getElementsByTagName('SubtractResult')[0].childNodes[0].nodeValue);
                // Print result square number.
                console.log(response_number);
                this.result = response_number;
            }
        }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }

  mul() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.dneonline.com/calculator.asmx?WSDL', true);

    // The following variable contains the xml SOAP request.
    const sr =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
          <soapenv:Header/>
          <soapenv:Body>
            <tem:Multiply>
              <tem:intA>`+this.intA+`</tem:intA>
              <tem:intB>`+this.intB+`</tem:intB>
            </tem:Multiply>
          </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                console.log(xmlhttp.response);
                // Here I'm getting the value contained by the <return> node.
                const response_number = parseInt(xml.getElementsByTagName('MultiplyResult')[0].childNodes[0].nodeValue);
                // Print result square number.
                console.log(response_number);
                this.result = response_number;
            }
        }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }

  div() {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open('POST', 'http://www.dneonline.com/calculator.asmx?WSDL', true);

    // The following variable contains the xml SOAP request.
    const sr =
        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
          <soapenv:Header/>
          <soapenv:Body>
            <tem:Divide>
              <tem:intA>`+this.intA+`</tem:intA>
              <tem:intB>`+this.intB+`</tem:intB>
            </tem:Divide>
          </soapenv:Body>
        </soapenv:Envelope>`;

    xmlhttp.onreadystatechange =  () => {
        if (xmlhttp.readyState == 4) {
            if (xmlhttp.status == 200) {
                const xml = xmlhttp.responseXML;
                console.log(xmlhttp.response);
                // Here I'm getting the value contained by the <return> node.
                const response_number = parseInt(xml.getElementsByTagName('DivideResult')[0].childNodes[0].nodeValue);
                // Print result square number.
                console.log(response_number);
                this.result = response_number;
            }
        }
    }
    // Send the POST request.
    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
    xmlhttp.responseType = 'document';
    xmlhttp.send(sr);
  }
}
