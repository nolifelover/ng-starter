import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  datas = [];
  show = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("https://www.mocky.io/v2/5b52f5322f0000fb0a3bb672?mocky-delay=2000ms").subscribe((data:any)=>{
      this.datas = data.datas;
      this.show = true;
      console.log(data);
    })
  }

}
