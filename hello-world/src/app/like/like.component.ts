import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input() isLiked:boolean;

  tweet = {
    body: 'Here is the body of a tweet',
    isLiked:false,
    likesCount:0
  }

  onClick(){
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount+= this.tweet.isLiked ? 1: -1;
  }
  ngOnInit() {
  }
}
