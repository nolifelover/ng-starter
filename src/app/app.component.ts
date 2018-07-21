import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng starter';
  x = ['a','b'];

  debugx(event:KeyboardEvent){
    console.log(event.key);
  }
}