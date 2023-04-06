import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Body/home/home.component';
import { PostsComponent } from './Components/Body/posts/posts.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'posts', component:PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
