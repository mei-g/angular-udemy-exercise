import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class LikeComponent implements OnInit {
  @Input('isLiked') isLiked:Boolean;
  @Input ('likesCount') likesCount:number;
  @Output() change=new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isLiked = !this.isLiked;
    this.likesCount+= this.isLiked?1:-1;
    this.change.emit();
  }

}
