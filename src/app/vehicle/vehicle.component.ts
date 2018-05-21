import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  vehicleMake: string;
  vehicleModel:string;
  vehicleYear:string;
  vehicleMileage:string;
  vehicleVIN:String;

  vehicleList : Array<any>;

  constructor( vehicleMake,vehicleModel,vehicleYear,vehicleMileage,vehicleVIN) { 

    this.vehicleMake = vehicleMake;
    this.vehicleModel = vehicleModel;
    this.vehicleYear = vehicleYear;
    this.vehicleMileage = vehicleMileage;
    this.vehicleVIN = vehicleVIN;
    this.vehicleList = [];
    
  }

  ngOnInit() {

    
  }

  addVehicle(vehicleMake,vehicleModel,vehicleYear,vehicleMileage,vehicleVIN){

    console.log("vehicleMake" +vehicleMake);
    console.log("vehicleModel" +vehicleModel);
    console.log("vehicleYear" +vehicleYear);
    console.log("vehicleMileage" +vehicleMileage);
    console.log("vehicleVIN" +vehicleVIN);

    //   new VehicleComponent(vehicleMake,vehicleModel,vehicleYear,vehicleMileage,vehicleVIN);

    // this.vehicleList.push(VehicleComponent);

    console.log("vehicleList" +this.vehicleList);
  }

}
