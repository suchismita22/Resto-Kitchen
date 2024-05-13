import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [

    {
      id: 1,
      foodName: "Alfredo pasta",
      foodDetails: " fettuccine  butter and Parmesan cheese",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },

    {
      id: 2,
      foodName: "Alfredo pasta",
      foodDetails: "Pesto Mesto Cheese",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      foodName: "Alfredo pasta",
      foodDetails: "Cramy Alfredo Sause",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      foodName: "Alfredo pasta",
      foodDetails: "Pomorose Sause",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      foodName: "Alfredo pasta",
      foodDetails: "Pron Olio PepperOnion ",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      foodName: "Alfredo pasta",
      foodDetails: "fresh fettuccine tossed with butter and Parmesan cheese",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=794&q=80"
    },
    {
      id: 7,
      foodName: "Alfredo pasta",
      foodDetails: " Olio Paperoncino",
      foodPrice: 298,
      foodImg: "https://images.unsplash.com/photo-1617474019977-0e105d1b430e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]


} 
