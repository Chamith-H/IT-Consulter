import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public purposes = [
                      {
                        title:'Quick Learn',
                        class:'Learn',
                        image:'bi bi-airplane-engines-fill',
                      },

                      {
                        title:'Need a Help',
                        class:'Help',
                        image:'bi bi-binoculars-fill',
                      },
                      
                      {
                        title:'Teach Something',
                        class:'Teach',
                        image:'bi bi-trophy-fill',
                      },

                      {
                        title:'Post a Project',
                        class:'Project',
                        image:'bi bi-bar-chart-line-fill',
                      }
                    ]

  public adsPostPopup = false

  public formOne = true;
  public formTwo = false;

  public cancle_AdsPosting() {
    this.adsPostPopup = false
  }

  public handle_Purpose(purpose:any) {

  }
}
