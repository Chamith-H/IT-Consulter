import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/Requests/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private request: ApiService) { }

  public expandAccount = false
  public defaultAction = true

  public view_Progress() {
    this.expandAccount = !this.expandAccount
  }

  public switchActions() {
    this.defaultAction = !this.defaultAction
  }

  onSubmit_Login(form: NgForm) {
    console.log(form.value)
  }

  public async onSubmit_Register(form: NgForm) {
    this.request.register(form.value)
      .subscribe(
        (reponse) => console.log(reponse),
        (error) => console.log(error)
      )
  }
}
