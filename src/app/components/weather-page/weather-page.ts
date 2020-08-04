import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: "weather-page",
    templateUrl: "weather-page.html",
})


export class weatherpage{
    public constructor(private router: Router){
    }
}
