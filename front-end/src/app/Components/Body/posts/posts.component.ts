import { Component } from '@angular/core';
import { categories } from 'src/dataSets/categories';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public categories = categories
  public selectedCategory = 0
  public expand = false

  public subCategories = [{name:'', image:''}]

  public async expand_Category(selected:any) {
    this.subCategories = await categories[selected].sub

    if (this.selectedCategory == selected) {
      this.expand = await !this.expand
    }

    else {
      this.expand = await true
    }
    
    this.selectedCategory = selected
  }

  public view_Posts(category:any, subCategory:any) {

  }
}
