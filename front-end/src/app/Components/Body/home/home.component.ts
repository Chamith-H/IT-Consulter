import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from 'src/dataSets/categories';
import { benefits } from 'src/dataSets/benefits';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  public catagoryPopup = false

  public categories = categories
  public benefits = benefits

  public choosed = ''

  public selectedCategory = ''
  public subCategories = [{name:'', image:''}]

  public async select_Category (selected:any) {
    this.selectedCategory = await categories[selected].title
    this.subCategories = await categories[selected].sub
    this.choosed = await selected
    this.catagoryPopup = true
  }

  public browse_Posts(choose:any) {
    this.router.navigate(['/posts'], {queryParams: {category: this.choosed, subCategory: choose}});
  }
}
