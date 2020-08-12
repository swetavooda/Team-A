import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "nativescript-plugin-firebase";
import { TextView } from "tns-core-modules/ui/text-view";
import { EventData } from "tns-core-modules/data/observable";
@Component({
    selector: "uploaddata-page",
    templateUrl: "uploaddata-page.html",
    styleUrls: ["./current-challenge.component.css"],
})


export class uploaddatapage{
    name_details="";
    pass_details="";
    add_details="";
    public constructor(private router: Router){


    }
    onTextChange1(args: EventData) {
        const tv = args.object as TextView;
        this.name_details=tv.text;
    }
    onTextChange2(args: EventData) {
        const tv = args.object as TextView;
        this.add_details=tv.text;
    }
    onTextChange3(args: EventData) {
        const tv = args.object as TextView;
        this.pass_details=tv.text;
    }
    uploadFile(){

        console.log(this.name_details+"   "+this.pass_details+"  "+this.add_details);
        let data={
            "name":this.name_details,
            "password":this.pass_details,
            "email":this.add_details
        }
        console.log(JSON.stringify(data));

        const c1 = firebase.firestore.collection("users");
        c1.add(data);
        alert("Done!");

    }
}
