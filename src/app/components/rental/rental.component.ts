import { Component, OnInit } from '@angular/core';
import { Rental } from '../../models/rental';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrl: './rental.component.css'
})
export class RentalComponent implements OnInit {

  rentalls: Rental[] = [];
  dataLoaded = false;

  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalls();
  }

  getRentalls() {
    this.rentalService.getRentalls().subscribe(response=>{
      this.rentalls = response.data
      this.dataLoaded=true;
    })

  }
}
