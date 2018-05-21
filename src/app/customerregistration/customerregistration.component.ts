import { Component, OnInit } from '@angular/core';
import { VehicleComponent } from '../vehicle/vehicle.component';

@Component({
  selector: 'app-customerregistration',
  templateUrl: './customerregistration.component.html',
  styleUrls: ['./customerregistration.component.scss']
})
export class CustomerregistrationComponent implements OnInit {

  vehicle: VehicleComponent;

  fname:String;
  lname:String;
  email:String;
  password:String;
  phone:String;
  address:String;
  vehicleMake: String;
  vehicleModel: String;
  vehicleYear: String;
  vehicleMileage:String;
  vehicleVIN:String;

  constructor() {
    

   }

  ngOnInit() {
  }

  addVehicle(){
    console.log("fname " +this.fname);
    console.log("lname "+this.lname);  
    console.log("email "+this.email); 
    console.log("password " +this.password);
    console.log("phone"+this.phone);  
    console.log("address "+this.address); 
    console.log("this.vehicleMake " +this.vehicleMake);
    console.log("this.vehicleModel " +this.vehicleModel);
    console.log("this.vehicleYear " +this.vehicleYear);
    console.log("this.vehicleMileage " +this.vehicleMileage);
    console.log("this.vehicleVIN " +this.vehicleVIN); 

    // execute child component method
    this.vehicle.addVehicle(this.vehicleMake,this.vehicleModel,this.vehicleYear,this.vehicleMileage,this.vehicleVIN);
  }

}
