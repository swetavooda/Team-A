import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home/home.component";
import {scannerpage} from "./components/Scanner-page/scanner-page";
import {weatherpage} from "./components/weather-page/weather-page";
import {camerapage} from "./components/camera-page/camera-page";
import {uichangespage} from "./components/uichanges-page/uichanges-page";
import {uploaddatapage} from "./components/uploaddata-page/uploaddata-page";
import {progressbarpage} from "./components/progressbar-page/progressbar-page";


export const appRoutes: any = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    {path : "qrscanner", component:scannerpage },
    {path:"weather" , component : weatherpage},
    {path:"camera" , component : camerapage},
    {path:"uichanges", component : uichangespage},
    {path:"uploaddata", component : uploaddatapage},
    {path:"progressbar", component : progressbarpage}

    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export const appComponents : any=[
    scannerpage,HomeComponent,weatherpage,camerapage,uichangespage,uploaddatapage,progressbarpage
];
