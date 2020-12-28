import { Comment } from './../comment';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: Array<Comment> = new Array<Comment>();

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.getComments();
  }

  addComment(id: number, name: string, email: string, body: string): void {
    let tmpComment: Comment = new Comment(id, name, email, body);
    console.log(tmpComment);
    this.comments.push(tmpComment);
  }

  getComments() {
    
    // query all comments from public free api
    this.http.get<any>('https://jsonplaceholder.typicode.com/comments').subscribe(data => {
      //console.log(data);
      data.forEach(comment => {
        //console.log(comment);
        
        this.addComment(comment.id, comment.name, comment.email, comment.body);
        // console.log(this.comments);
      });
     
    })

    // console.log(this.comments);
  }
}
