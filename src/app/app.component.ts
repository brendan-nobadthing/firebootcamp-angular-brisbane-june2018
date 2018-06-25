import { Component } from '@angular/core';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brisbane';

  titleChanged(event) {
    // console.log(event);
    this.title = event.target.value;
  }

}
