import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent {
  constructor( private httpHotel : HotelsService ){ }

  ngOnInit(){

    this.httpHotel.getAllHotels().subscribe((resp : any ) =>{
      console.log(resp)
    })
  }

}
