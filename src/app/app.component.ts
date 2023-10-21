import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Botones';
  
  numero: number = 0;

  incremento() {
    this.numero++;
  }
  decremento() {
    this.numero--;
  }
}
