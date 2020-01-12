import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unit-like5';
  tweet = {
    body: "this is the body",
    isFavorite:true,
    likesCount:10
  }
  onChange(){
    console.log("change event triggered");
  }
}
