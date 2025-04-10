import { Component } from '@angular/core';
import { Hotel } from '../models/hotels';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  hotelsArr : Hotel[] = []

}
