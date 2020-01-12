import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service'

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  email = "me@xyz.com"
  authors 
  isActive = false
  constructor(private service: AuthorsService) { 
    this.authors = service.getAuthors();
  }
  onSpanStop($event){
    console.log("span clicked");
     
  }
  onStop($event) {
    this.isActive = !this.isActive
    console.log(event)
    //event bubbling
    event.stopPropagation();

  }

  inputKeyup(){
    console.log(this.email);
  }
  ngOnInit() {
  }

}
