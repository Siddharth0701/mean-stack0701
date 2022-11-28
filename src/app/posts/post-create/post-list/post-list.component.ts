import { Component } from "@angular/core";

@Component({
  selector:'app-post-list',
  templateUrl:'./post-list.component.html'
})
export class PostListComponent{
  posts=[
{title:'first post', content:'This is first post'},
{title:'second  post', content:'This is second post'},
{title:'third post', content:'This is third post'},

  ];
}

