import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor(private APPI : ApiService ) { }

  getAllHotels(){
    return this.APPI.getAll('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
  }

}
