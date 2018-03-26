import { Component } from '@angular/core';
import { Post } from '../_models';
 
@Component({
    selector: 'app-posts',
    styles: [
        `.main-panel {
            height: 100px;
            overflow-y: scroll;
        }`
    ],
    template: `
        <div class="main-panel">
        scroller
            <div infiniteScroll
                [infiniteScrollDistance]="2"
                [infiniteScrollThrottle]="50"
                [infiniteScrollContainer]="selector"
                [fromRoot]="true"
                (scrolled)="onScroll()">

                <ul>
                <li *ngFor="let post of posts">
                  {{ post.id }} {{post.text}}
                </li>
                </ul>
        

                </div>
        </div>
    `
})
export class PostsComponent {
    selector: string = '.main-panel';
    i: number;
    posts: Post[] = [];
    onScroll () {
        console.log('scrolled!!')
        this.posts[this.i] = new Post();
            this.posts[this.i].id = this.i;
            this.posts[this.i].text = "added text";            
    }    
    ngOnInit() {
        
        for(this.i = 0; this.i<100; this.i++){
            //console.log("post " + this.i + " created");
            this.posts[this.i] = new Post();
            this.posts[this.i].id = this.i;
            this.posts[this.i].text = "same text";            
        }
    }
}