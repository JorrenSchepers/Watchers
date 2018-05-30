import { Component, OnInit } from '@angular/core';
import { Car } from '../../model/car';
import { CarService } from '../../services/car.service';

@Component({
    selector: "api-cars",
    templateUrl: "cars.component.html",
    //styleUrls: ["cars.component.scss"]
})
export class CarsComponent implements OnInit {
    sortOptions: string[] = [
        "Model",
        "Horsepower",
        "Engine",
        "Fuel consumption",
        "Power source",
        "Seats",
        "Startprice",
        "Manufacturer"
    ];
    sortOption: string = this.sortOptions[0];
    show: string;

    set SortOption(s: string) {
        this.sortOption = s;
        this.ReloadCars();
    }

    get SortOption(): string {
        return this.sortOption;
    }

    set Show(s: string) {
        this.show = s;
        console.log(s);
        this.ReloadCars();
    }

    get Show(): string {
        return this.show;
    }

    constructor(private CarSvc: CarService) { }

    ngOnInit() {
        this.ReloadCars();
    }

    public setCar(id: number) {
        this.CarSvc.setCar(id);
    }

    public ReloadCars() {
        this.CarSvc.getCars(this.sortOption, this.show).subscribe(c => this.CarSvc.cars = c);
    }
}