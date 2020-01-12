import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  Categorys=[
    {id:1, name: "Development"},
    {id:2, name: "Art"},
    {id:3, name: "Languages"},
  ]
  constructor() { }

  ngOnInit() {
  }
  log(firstName){
    console.log(firstName);
  }
  logsubmit(f){
    console.log(f);
 } 
}
