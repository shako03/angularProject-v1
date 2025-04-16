import { Routes } from '@angular/router';

export const routes: Routes = [
      { 
            path:"", redirectTo: "Home",pathMatch:'full'
      },

      {
            path:"Home",
            loadComponent:()=>import('./Pages/home/home.component').then(m => m.HomeComponent)
      },

      {
            path:"Room",
            loadComponent:()=>import('./Pages/rooms/rooms.component').then(m => m.RoomsComponent)
      },
      {
            path:"Hotels",
            loadComponent:()=>import('./Pages/hotels/hotels.component').then(m => m.HotelsComponent)
      },
      {
            path:"Booked-rooms",
            loadComponent:()=>import('./Pages/booked-rooms/booked-rooms.component').then(m => m.BookedRoomsComponent)
      }
];
