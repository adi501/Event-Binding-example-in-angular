import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
   Name = 'Hi Adi';
  ngOnInit() {
  }
  changeMyName() {
  this.Name = 'Hi JC.Adi';
}
}
