import { Component } from '@angular/core';

export class weather {
  city!: string;
  conditions!: String;
  temperature!: number;
  icon!: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherApp';
}
